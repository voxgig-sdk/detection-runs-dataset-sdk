# DetectionRunsDataset SDK exists test

import pytest
from detectionrunsdataset_sdk import DetectionRunsDatasetSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = DetectionRunsDatasetSDK.test(None, None)
        assert testsdk is not None
