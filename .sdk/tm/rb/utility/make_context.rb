# DetectionRunsDataset SDK utility: make_context
require_relative '../core/context'
module DetectionRunsDatasetUtilities
  MakeContext = ->(ctxmap, basectx) {
    DetectionRunsDatasetContext.new(ctxmap, basectx)
  }
end
