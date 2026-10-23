# DetectionRunsDataset SDK utility: make_context

from projectname_sdk.core.context import DetectionRunsDatasetContext


def make_context_util(ctxmap, basectx):
    return DetectionRunsDatasetContext(ctxmap, basectx)
