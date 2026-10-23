# DetectionRunsDataset SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

DetectionRunsDatasetUtility.registrar = ->(u) {
  u.clean = DetectionRunsDatasetUtilities::Clean
  u.clean_add = DetectionRunsDatasetUtilities::CleanAdd
  u.clean_explain = DetectionRunsDatasetUtilities::CleanExplain
  u.done = DetectionRunsDatasetUtilities::Done
  u.make_error = DetectionRunsDatasetUtilities::MakeError
  u.feature_add = DetectionRunsDatasetUtilities::FeatureAdd
  u.feature_hook = DetectionRunsDatasetUtilities::FeatureHook
  u.feature_init = DetectionRunsDatasetUtilities::FeatureInit
  u.fetcher = DetectionRunsDatasetUtilities::Fetcher
  u.make_fetch_def = DetectionRunsDatasetUtilities::MakeFetchDef
  u.make_context = DetectionRunsDatasetUtilities::MakeContext
  u.make_options = DetectionRunsDatasetUtilities::MakeOptions
  u.make_request = DetectionRunsDatasetUtilities::MakeRequest
  u.make_response = DetectionRunsDatasetUtilities::MakeResponse
  u.make_result = DetectionRunsDatasetUtilities::MakeResult
  u.make_point = DetectionRunsDatasetUtilities::MakePoint
  u.make_spec = DetectionRunsDatasetUtilities::MakeSpec
  u.make_url = DetectionRunsDatasetUtilities::MakeUrl
  u.param = DetectionRunsDatasetUtilities::Param
  u.prepare_auth = DetectionRunsDatasetUtilities::PrepareAuth
  u.prepare_body = DetectionRunsDatasetUtilities::PrepareBody
  u.prepare_headers = DetectionRunsDatasetUtilities::PrepareHeaders
  u.prepare_method = DetectionRunsDatasetUtilities::PrepareMethod
  u.prepare_params = DetectionRunsDatasetUtilities::PrepareParams
  u.prepare_path = DetectionRunsDatasetUtilities::PreparePath
  u.prepare_query = DetectionRunsDatasetUtilities::PrepareQuery
  u.graphql_body = DetectionRunsDatasetUtilities::GraphqlBody
  u.graphql_errors = DetectionRunsDatasetUtilities::GraphqlErrors
  u.result_basic = DetectionRunsDatasetUtilities::ResultBasic
  u.result_body = DetectionRunsDatasetUtilities::ResultBody
  u.result_headers = DetectionRunsDatasetUtilities::ResultHeaders
  u.transform_request = DetectionRunsDatasetUtilities::TransformRequest
  u.transform_response = DetectionRunsDatasetUtilities::TransformResponse
}
