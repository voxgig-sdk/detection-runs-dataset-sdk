# frozen_string_literal: true

# Typed models for the DetectionRunsDataset SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Report entity data model.
#
# @!attribute [rw] canonical
#   @return [String]
#
# @!attribute [rw] checks
#   @return [Array]
#
# @!attribute [rw] finished_at
#   @return [String]
#
# @!attribute [rw] host
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] kernel
#   @return [String]
#
# @!attribute [rw] license
#   @return [String]
#
# @!attribute [rw] notes
#   @return [Array]
#
# @!attribute [rw] proxy
#   @return [Hash]
#
# @!attribute [rw] run_id
#   @return [String]
#
# @!attribute [rw] schema_version
#   @return [Integer]
#
# @!attribute [rw] segments
#   @return [Array]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] started_at
#   @return [String]
#
# @!attribute [rw] subjects
#   @return [Array]
#
# @!attribute [rw] title
#   @return [String]
Report = Struct.new(
  :canonical,
  :checks,
  :finished_at,
  :host,
  :id,
  :kernel,
  :license,
  :notes,
  :proxy,
  :run_id,
  :schema_version,
  :segments,
  :slug,
  :started_at,
  :subjects,
  :title,
  keyword_init: true
)

# Request payload for Report#load.
#
# @!attribute [rw] id
#   @return [String]
ReportLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Report#list.
#
# @!attribute [rw] canonical
#   @return [String, nil]
#
# @!attribute [rw] checks
#   @return [Array, nil]
#
# @!attribute [rw] finished_at
#   @return [String, nil]
#
# @!attribute [rw] host
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] kernel
#   @return [String, nil]
#
# @!attribute [rw] license
#   @return [String, nil]
#
# @!attribute [rw] notes
#   @return [Array, nil]
#
# @!attribute [rw] proxy
#   @return [Hash, nil]
#
# @!attribute [rw] run_id
#   @return [String, nil]
#
# @!attribute [rw] schema_version
#   @return [Integer, nil]
#
# @!attribute [rw] segments
#   @return [Array, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] started_at
#   @return [String, nil]
#
# @!attribute [rw] subjects
#   @return [Array, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
ReportListMatch = Struct.new(
  :canonical,
  :checks,
  :finished_at,
  :host,
  :id,
  :kernel,
  :license,
  :notes,
  :proxy,
  :run_id,
  :schema_version,
  :segments,
  :slug,
  :started_at,
  :subjects,
  :title,
  keyword_init: true
)

