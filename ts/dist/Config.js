"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'DetectionRunsDataset',
        slug: "detection-runs-dataset",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "now": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://antibrow.com/api/v1",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            report: {},
        }
    };
    entity = {
        "report": {
            "fields": [
                {
                    "name": "canonical",
                    "title": "Canonical",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "The run's report page."
                },
                {
                    "name": "checks",
                    "title": "Checks",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "finished_at",
                    "title": "Finished At",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "ISO 8601 (date-only where only a date was recorded)."
                },
                {
                    "name": "host",
                    "title": "Host",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Machine the run was driven from, e.g."
                },
                {
                    "name": "id",
                    "title": "Id",
                    "type": "`$STRING`"
                },
                {
                    "name": "kernel",
                    "title": "Kernel",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Browser build the run was headlined on, e.g."
                },
                {
                    "name": "license",
                    "title": "License",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "e.g."
                },
                {
                    "name": "notes",
                    "title": "Notes",
                    "type": "`$ARRAY`",
                    "req": true,
                    "short": "Observations, limits and retractions."
                },
                {
                    "name": "proxy",
                    "title": "Proxy",
                    "type": "`$OBJECT`",
                    "req": true,
                    "short": "The network exit a run or check used."
                },
                {
                    "name": "run_id",
                    "title": "Run Id",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Run id, e.g."
                },
                {
                    "name": "schema_version",
                    "title": "Schema Version",
                    "type": "`$INTEGER`",
                    "req": true
                },
                {
                    "name": "segments",
                    "title": "Segments",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "slug",
                    "title": "Slug",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "Report slug, the `{slug}` path parameter, e.g."
                },
                {
                    "name": "started_at",
                    "title": "Started At",
                    "type": "`$STRING`",
                    "req": true,
                    "short": "ISO 8601 (date-only where only a date was recorded)."
                },
                {
                    "name": "subjects",
                    "title": "Subjects",
                    "type": "`$ARRAY`",
                    "req": true
                },
                {
                    "name": "title",
                    "title": "Title",
                    "type": "`$STRING`",
                    "req": true
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "report",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/reports",
                            "segments": [
                                {
                                    "lit": "reports"
                                }
                            ],
                            "parts": [
                                "reports"
                            ],
                            "rename": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.runs`"
                            },
                            "args": {},
                            "select": {},
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "kind": "http",
                            "method": "GET",
                            "orig": "/reports/{slug}",
                            "segments": [
                                {
                                    "lit": "reports"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "parts": [
                                "reports",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "slug": "id"
                                }
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "args": {
                                "params": [
                                    {
                                        "name": "id",
                                        "orig": "slug",
                                        "type": "`$STRING`",
                                        "kind": "param",
                                        "reqd": true,
                                        "example": "detection-2026-09"
                                    }
                                ]
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "response": {
                                "kind": "json",
                                "media": "application/json"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map