export interface Report {
    canonical: string;
    checks: any[];
    finished_at: string;
    host: string;
    id?: string;
    kernel: string;
    license: string;
    notes: any[];
    proxy: Record<string, any>;
    run_id: string;
    schema_version: number;
    segments: any[];
    slug: string;
    started_at: string;
    subjects: any[];
    title: string;
}
export interface ReportLoadMatch {
    id: string;
}
export interface ReportListMatch {
    canonical?: string;
    checks?: any[];
    finished_at?: string;
    host?: string;
    id?: string;
    kernel?: string;
    license?: string;
    notes?: any[];
    proxy?: Record<string, any>;
    run_id?: string;
    schema_version?: number;
    segments?: any[];
    slug?: string;
    started_at?: string;
    subjects?: any[];
    title?: string;
}
