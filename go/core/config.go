package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "DetectionRunsDataset",
			"slug": "detection-runs-dataset",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"now": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://antibrow.com/api/v1",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"report": map[string]any{},
			},
		},
		"entity": map[string]any{
			"report": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "canonical",
						"title": "Canonical",
						"type": "`$STRING`",
						"req": true,
						"short": "The run's report page.",
					},
					map[string]any{
						"name": "checks",
						"title": "Checks",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "finished_at",
						"title": "Finished At",
						"type": "`$STRING`",
						"req": true,
						"short": "ISO 8601 (date-only where only a date was recorded).",
					},
					map[string]any{
						"name": "host",
						"title": "Host",
						"type": "`$STRING`",
						"req": true,
						"short": "Machine the run was driven from, e.g.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "kernel",
						"title": "Kernel",
						"type": "`$STRING`",
						"req": true,
						"short": "Browser build the run was headlined on, e.g.",
					},
					map[string]any{
						"name": "license",
						"title": "License",
						"type": "`$STRING`",
						"req": true,
						"short": "e.g.",
					},
					map[string]any{
						"name": "notes",
						"title": "Notes",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Observations, limits and retractions.",
					},
					map[string]any{
						"name": "proxy",
						"title": "Proxy",
						"type": "`$OBJECT`",
						"req": true,
						"short": "The network exit a run or check used.",
					},
					map[string]any{
						"name": "run_id",
						"title": "Run Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Run id, e.g.",
					},
					map[string]any{
						"name": "schema_version",
						"title": "Schema Version",
						"type": "`$INTEGER`",
						"req": true,
					},
					map[string]any{
						"name": "segments",
						"title": "Segments",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "slug",
						"title": "Slug",
						"type": "`$STRING`",
						"req": true,
						"short": "Report slug, the `{slug}` path parameter, e.g.",
					},
					map[string]any{
						"name": "started_at",
						"title": "Started At",
						"type": "`$STRING`",
						"req": true,
						"short": "ISO 8601 (date-only where only a date was recorded).",
					},
					map[string]any{
						"name": "subjects",
						"title": "Subjects",
						"type": "`$ARRAY`",
						"req": true,
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "report",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/reports",
								"segments": []any{
									map[string]any{
										"lit": "reports",
									},
								},
								"parts": []any{
									"reports",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.runs`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/reports/{slug}",
								"segments": []any{
									map[string]any{
										"lit": "reports",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"reports",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"slug": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "slug",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "detection-2026-09",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
