<?php
declare(strict_types=1);

// DetectionRunsDataset SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class DetectionRunsDatasetMakeContext
{
    public static function call(array $ctxmap, ?DetectionRunsDatasetContext $basectx): DetectionRunsDatasetContext
    {
        return new DetectionRunsDatasetContext($ctxmap, $basectx);
    }
}
