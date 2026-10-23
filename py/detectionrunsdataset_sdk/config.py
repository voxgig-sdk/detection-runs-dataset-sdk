# DetectionRunsDataset SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "DetectionRunsDataset",
            "slug": "detection-runs-dataset",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "now": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://antibrow.com/api/v1",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "report": {},
            },
        },
        "entity": {
      "report": {
        "fields": [
          {
            "name": "canonical",
            "title": "Canonical",
            "type": "`$STRING`",
            "req": True,
            "short": "The run's report page.",
          },
          {
            "name": "checks",
            "title": "Checks",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "finished_at",
            "title": "Finished At",
            "type": "`$STRING`",
            "req": True,
            "short": "ISO 8601 (date-only where only a date was recorded).",
          },
          {
            "name": "host",
            "title": "Host",
            "type": "`$STRING`",
            "req": True,
            "short": "Machine the run was driven from, e.g.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "kernel",
            "title": "Kernel",
            "type": "`$STRING`",
            "req": True,
            "short": "Browser build the run was headlined on, e.g.",
          },
          {
            "name": "license",
            "title": "License",
            "type": "`$STRING`",
            "req": True,
            "short": "e.g.",
          },
          {
            "name": "notes",
            "title": "Notes",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Observations, limits and retractions.",
          },
          {
            "name": "proxy",
            "title": "Proxy",
            "type": "`$OBJECT`",
            "req": True,
            "short": "The network exit a run or check used.",
          },
          {
            "name": "run_id",
            "title": "Run Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Run id, e.g.",
          },
          {
            "name": "schema_version",
            "title": "Schema Version",
            "type": "`$INTEGER`",
            "req": True,
          },
          {
            "name": "segments",
            "title": "Segments",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "slug",
            "title": "Slug",
            "type": "`$STRING`",
            "req": True,
            "short": "Report slug, the `{slug}` path parameter, e.g.",
          },
          {
            "name": "started_at",
            "title": "Started At",
            "type": "`$STRING`",
            "req": True,
            "short": "ISO 8601 (date-only where only a date was recorded).",
          },
          {
            "name": "subjects",
            "title": "Subjects",
            "type": "`$ARRAY`",
            "req": True,
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                    "lit": "reports",
                  },
                ],
                "parts": [
                  "reports",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.runs`",
                },
                "args": {},
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
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
                    "lit": "reports",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "reports",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "slug": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "slug",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "detection-2026-09",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
