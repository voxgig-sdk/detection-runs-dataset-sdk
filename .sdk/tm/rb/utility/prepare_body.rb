# DetectionRunsDataset SDK utility: prepare_body
require_relative 'media'
module DetectionRunsDatasetUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return DetectionRunsDatasetUtilities.raw_body(ctx.reqdata) if DetectionRunsDatasetUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
