"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ReportEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when DETECTION_RUNS_DATASET_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('DETECTION_RUNS_DATASET_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.DetectionRunsDatasetSDK.test();
        const ent = testsdk.Report();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('report hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.DetectionRunsDatasetSDK.test(offline).Report().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.DetectionRunsDatasetSDK.test(offline).Report()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.DetectionRunsDatasetSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.Report().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.DetectionRunsDatasetSDK.test().Report().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.DetectionRunsDatasetSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.Report().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.Report().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.DetectionRunsDatasetSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Report().list({ "canonical": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.DETECTION_RUNS_DATASET_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'report.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "canonical": { "a": true, "h": "Canonical", "n": "canonical", "r": true, "sh": "The run's report page.", "t": "`$STRING`", "key$": "canonical", "index$": 0 }, "checks": { "a": true, "h": "Checks", "n": "checks", "r": true, "t": "`$ARRAY`", "key$": "checks", "index$": 1 }, "finished_at": { "a": true, "h": "Finished At", "n": "finished_at", "r": true, "sh": "ISO 8601 (date-only where only a date was recorded).", "t": "`$STRING`", "key$": "finished_at", "index$": 2 }, "host": { "a": true, "h": "Host", "n": "host", "r": true, "sh": "Machine the run was driven from, e.g.", "t": "`$STRING`", "key$": "host", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 4 }, "kernel": { "a": true, "h": "Kernel", "n": "kernel", "r": true, "sh": "Browser build the run was headlined on, e.g.", "t": "`$STRING`", "key$": "kernel", "index$": 5 }, "license": { "a": true, "h": "License", "n": "license", "r": true, "sh": "e.g.", "t": "`$STRING`", "key$": "license", "index$": 6 }, "notes": { "a": true, "h": "Notes", "n": "notes", "r": true, "sh": "Observations, limits and retractions.", "t": "`$ARRAY`", "key$": "notes", "index$": 7 }, "proxy": { "a": true, "h": "Proxy", "n": "proxy", "r": true, "sh": "The network exit a run or check used.", "t": "`$OBJECT`", "key$": "proxy", "index$": 8 }, "run_id": { "a": true, "h": "Run Id", "n": "run_id", "r": true, "sh": "Run id, e.g.", "t": "`$STRING`", "key$": "run_id", "index$": 9 }, "schema_version": { "a": true, "h": "Schema Version", "n": "schema_version", "r": true, "t": "`$INTEGER`", "key$": "schema_version", "index$": 10 }, "segments": { "a": true, "h": "Segments", "n": "segments", "r": true, "t": "`$ARRAY`", "key$": "segments", "index$": 11 }, "slug": { "a": true, "h": "Slug", "n": "slug", "r": true, "sh": "Report slug, the `{slug}` path parameter, e.g.", "t": "`$STRING`", "key$": "slug", "index$": 12 }, "started_at": { "a": true, "h": "Started At", "n": "started_at", "r": true, "sh": "ISO 8601 (date-only where only a date was recorded).", "t": "`$STRING`", "key$": "started_at", "index$": 13 }, "subjects": { "a": true, "h": "Subjects", "n": "subjects", "r": true, "t": "`$ARRAY`", "key$": "subjects", "index$": 14 }, "title": { "a": true, "h": "Title", "n": "title", "r": true, "t": "`$STRING`", "key$": "title", "index$": 15 } }, "id": { "field": "id", "name": "id" }, "name": "report", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /reports", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/reports", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "reports" }], "t": { "req": "`reqdata`", "res": "`body.runs`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /reports/{slug}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "detection-2026-09", "k": "param", "n": "id", "or": "slug", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/reports/{slug}", "q": { "exist": ["id"] }, "r": { "param": { "slug": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "reports" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "report", "name__orig": "report", "Name": "Report", "name_": "report", "name-": "report", "NAME": "REPORT", "index$": 0 }, { "active": true, "entity": "report", "key$": "BasicReportFlow", "kind": "basic", "name": "BasicReportFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "report_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "report_ref01", "srcdatavar": "report_ref01_data", "suffix": "_dt0" }, "m": { "id": "report01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-report_ref01" } }], "index$": 1 }] }, 'Report', { "GET /reports": { "protocol": "http", "parameters": [] }, "GET /reports/{slug}": { "protocol": "http", "parameters": [{ "name": "slug", "in": "path", "required": true, "description": "Report slug of the run.", "schema": { "type": "string" }, "example": "detection-2026-09", "index$": 0 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let report_ref01_data = Object.values(setup.data.existing.report)[0];
        // LIST
        const report_ref01_ent = client.Report();
        const report_ref01_match = {};
        const report_ref01_list = (await report_ref01_ent.list(report_ref01_match)).map((e) => e.data());
        // LOAD
        const report_ref01_match_dt0 = {};
        report_ref01_match_dt0.id = report_ref01_data.id;
        const report_ref01_data_dt0 = (await report_ref01_ent.load(report_ref01_match_dt0)).data();
        (0, node_assert_1.default)(report_ref01_data_dt0.id === report_ref01_data.id);
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/report/ReportTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.DetectionRunsDatasetSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['report01', 'report02', 'report03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'DETECTION_RUNS_DATASET_TEST_REPORT_ENTID': idmap,
        'DETECTION_RUNS_DATASET_TEST_LIVE': 'FALSE',
        'DETECTION_RUNS_DATASET_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['DETECTION_RUNS_DATASET_TEST_REPORT_ENTID'];
    const live = 'TRUE' === env.DETECTION_RUNS_DATASET_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['DETECTION_RUNS_DATASET_TEST_REPORT_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.DetectionRunsDatasetSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.DETECTION_RUNS_DATASET_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ReportEntity.test.js.map