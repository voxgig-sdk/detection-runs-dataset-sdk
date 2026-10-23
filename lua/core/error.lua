-- DetectionRunsDataset SDK error

local json = require("dkjson")

local DetectionRunsDatasetError = {}
DetectionRunsDatasetError.__index = DetectionRunsDatasetError

-- Reachable for a debugger, absent from the table itself: the context holds
-- the live spec and options, and an error is what gets dumped or encoded.
local CONTEXT = setmetatable({}, { __mode = "k" })


function DetectionRunsDatasetError.new(code, msg, ctx)
  local self = setmetatable({}, DetectionRunsDatasetError)
  self.is_sdk_error = true
  self.sdk = "DetectionRunsDataset"
  self.code = code or ""
  self.msg = msg or ""
  self.result = nil
  self.spec = nil
  self.status = -1
  CONTEXT[self] = ctx
  return self
end


function DetectionRunsDatasetError:context()
  return CONTEXT[self]
end


function DetectionRunsDatasetError:error()
  return self.msg
end


function DetectionRunsDatasetError:not_found()
  return 404 == self.status
end


-- What make_error attached is already cleaned; the context is not part of
-- the record.
function DetectionRunsDatasetError:to_table()
  return {
    sdk = self.sdk,
    code = self.code,
    msg = self.msg,
    status = self.status,
    result = self.result,
    spec = self.spec,
  }
end


function DetectionRunsDatasetError:to_json()
  return json.encode(self:to_table())
end


function DetectionRunsDatasetError:__tostring()
  return self.msg
end


function DetectionRunsDatasetError.__tojson(self)
  return self:to_json()
end


return DetectionRunsDatasetError
