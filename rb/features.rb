# DetectionRunsDataset SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module DetectionRunsDatasetFeatures
  def self.make_feature(name)
    case name
    when "base"
      DetectionRunsDatasetBaseFeature.new
    when "ratelimit"
      DetectionRunsDatasetRatelimitFeature.new
    when "retry"
      DetectionRunsDatasetRetryFeature.new
    when "test"
      DetectionRunsDatasetTestFeature.new
    when "timeout"
      DetectionRunsDatasetTimeoutFeature.new
    else
      DetectionRunsDatasetBaseFeature.new
    end
  end
end
