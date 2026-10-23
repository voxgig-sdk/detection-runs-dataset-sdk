<?php
declare(strict_types=1);

// Typed models for the DetectionRunsDataset SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Report entity data model. */
class Report
{
    public string $canonical;
    public array $checks;
    public string $finished_at;
    public string $host;
    public ?string $id = null;
    public string $kernel;
    public string $license;
    public array $notes;
    public array $proxy;
    public string $run_id;
    public int $schema_version;
    public array $segments;
    public string $slug;
    public string $started_at;
    public array $subjects;
    public string $title;
}

/** Request payload for Report#load. */
class ReportLoadMatch
{
    public string $id;
}

/** Request payload for Report#list. */
class ReportListMatch
{
    public ?string $canonical = null;
    public ?array $checks = null;
    public ?string $finished_at = null;
    public ?string $host = null;
    public ?string $id = null;
    public ?string $kernel = null;
    public ?string $license = null;
    public ?array $notes = null;
    public ?array $proxy = null;
    public ?string $run_id = null;
    public ?int $schema_version = null;
    public ?array $segments = null;
    public ?string $slug = null;
    public ?string $started_at = null;
    public ?array $subjects = null;
    public ?string $title = null;
}

