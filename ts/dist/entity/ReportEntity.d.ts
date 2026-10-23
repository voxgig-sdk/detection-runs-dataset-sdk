import { DetectionRunsDatasetEntityBase } from '../DetectionRunsDatasetEntityBase';
import type { DetectionRunsDatasetSDK } from '../DetectionRunsDatasetSDK';
import type { Control } from '../types';
import type { Report, ReportLoadMatch, ReportListMatch } from '../DetectionRunsDatasetTypes';
declare class ReportEntity extends DetectionRunsDatasetEntityBase<Report> {
    constructor(client: DetectionRunsDatasetSDK, entopts: any);
    make(this: ReportEntity): ReportEntity;
    load(this: any, reqmatch?: ReportLoadMatch, ctrl?: Control): Promise<ReportEntity>;
    list(this: any, reqmatch?: ReportListMatch, ctrl?: Control): Promise<ReportEntity[]>;
}
export { ReportEntity };
