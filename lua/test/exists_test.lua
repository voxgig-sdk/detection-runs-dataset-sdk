-- DetectionRunsDataset SDK exists test

local sdk = require("detection-runs-dataset_sdk")

describe("DetectionRunsDatasetSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
