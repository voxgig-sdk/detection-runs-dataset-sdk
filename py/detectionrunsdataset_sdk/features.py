# DetectionRunsDataset SDK feature factory

from detectionrunsdataset_sdk.feature.base_feature import DetectionRunsDatasetBaseFeature
from detectionrunsdataset_sdk.feature.ratelimit_feature import DetectionRunsDatasetRatelimitFeature
from detectionrunsdataset_sdk.feature.retry_feature import DetectionRunsDatasetRetryFeature
from detectionrunsdataset_sdk.feature.test_feature import DetectionRunsDatasetTestFeature
from detectionrunsdataset_sdk.feature.timeout_feature import DetectionRunsDatasetTimeoutFeature


_FEATURES = {
    "base": lambda: DetectionRunsDatasetBaseFeature(),
    "ratelimit": lambda: DetectionRunsDatasetRatelimitFeature(),
    "retry": lambda: DetectionRunsDatasetRetryFeature(),
    "test": lambda: DetectionRunsDatasetTestFeature(),
    "timeout": lambda: DetectionRunsDatasetTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
