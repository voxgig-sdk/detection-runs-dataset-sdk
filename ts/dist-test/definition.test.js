"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "report",
        "accessor": "Report",
        "op": "list",
        "method": "GET",
        "path": "/reports",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "schema_version": 1,
            "license": "x",
            "canonical": "x",
            "documentation": "x",
            "runs": [
                {
                    "schema_version": 1,
                    "run_id": "x",
                    "slug": "x",
                    "title": "x",
                    "started_at": "x",
                    "finished_at": "x",
                    "kernel": "x",
                    "host": "x",
                    "proxy": {
                        "type": "x",
                        "exit_ip": "x",
                        "exit_block": "x",
                        "geo": "x"
                    },
                    "subjects": [
                        {
                            "id": "x",
                            "name": "x",
                            "version": "x",
                            "config": "x"
                        }
                    ],
                    "segments": [
                        {
                            "id": "x",
                            "label": "x",
                            "description": "x",
                            "started_at": "x",
                            "finished_at": "x",
                            "presented": {
                                "user_agent": "x",
                                "platform": "x",
                                "timezone": "x",
                                "languages": "x",
                                "hardware": "x",
                                "webdriver": "x",
                                "webgl_vendor": "x",
                                "webgl_renderer": "x"
                            }
                        }
                    ],
                    "checks": [
                        {
                            "detector": "x",
                            "target": "x",
                            "subject": "x",
                            "result": "pass",
                            "detail": "x",
                            "metrics": {},
                            "segment": "x",
                            "round": 1,
                            "kernel": "x",
                            "proxy": {
                                "type": "x",
                                "exit_ip": "x",
                                "exit_block": "x",
                                "geo": "x"
                            },
                            "evidence_url": "x",
                            "checked_at": "x"
                        }
                    ],
                    "notes": [
                        "x"
                    ],
                    "license": "x",
                    "canonical": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "report",
        "accessor": "Report",
        "op": "load",
        "method": "GET",
        "path": "/reports/{slug}",
        "args": [
            {
                "name": "id",
                "wire": "slug",
                "value": "detection-2026-09"
            }
        ],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": null,
        "status": 200,
        "sample": {
            "schema_version": 1,
            "run_id": "x",
            "slug": "x",
            "title": "x",
            "started_at": "x",
            "finished_at": "x",
            "kernel": "x",
            "host": "x",
            "proxy": {
                "type": "x",
                "exit_ip": "x",
                "exit_block": "x",
                "geo": "x"
            },
            "subjects": [
                {
                    "id": "x",
                    "name": "x",
                    "version": "x",
                    "config": "x"
                }
            ],
            "segments": [
                {
                    "id": "x",
                    "label": "x",
                    "description": "x",
                    "started_at": "x",
                    "finished_at": "x",
                    "presented": {
                        "user_agent": "x",
                        "platform": "x",
                        "timezone": "x",
                        "languages": "x",
                        "hardware": "x",
                        "webdriver": "x",
                        "webgl_vendor": "x",
                        "webgl_renderer": "x"
                    }
                }
            ],
            "checks": [
                {
                    "detector": "x",
                    "target": "x",
                    "subject": "x",
                    "result": "pass",
                    "detail": "x",
                    "metrics": {},
                    "segment": "x",
                    "round": 1,
                    "kernel": "x",
                    "proxy": {
                        "type": "x",
                        "exit_ip": "x",
                        "exit_block": "x",
                        "geo": "x"
                    },
                    "evidence_url": "x",
                    "checked_at": "x"
                }
            ],
            "notes": [
                "x"
            ],
            "license": "x",
            "canonical": "x"
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map