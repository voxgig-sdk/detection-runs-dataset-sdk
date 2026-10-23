-- Typed models for the DetectionRunsDataset SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Report
---@field canonical string
---@field checks table
---@field finished_at string
---@field host string
---@field id? string
---@field kernel string
---@field license string
---@field notes table
---@field proxy table
---@field run_id string
---@field schema_version number
---@field segments table
---@field slug string
---@field started_at string
---@field subjects table
---@field title string

---@class ReportLoadMatch
---@field id string

---@class ReportListMatch
---@field canonical? string
---@field checks? table
---@field finished_at? string
---@field host? string
---@field id? string
---@field kernel? string
---@field license? string
---@field notes? table
---@field proxy? table
---@field run_id? string
---@field schema_version? number
---@field segments? table
---@field slug? string
---@field started_at? string
---@field subjects? table
---@field title? string

local M = {}

return M
