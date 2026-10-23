<?php
declare(strict_types=1);

// DetectionRunsDataset SDK exists test

require_once __DIR__ . '/../detectionrunsdataset_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = DetectionRunsDatasetSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
