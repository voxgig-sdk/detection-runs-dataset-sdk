import { ReportEntity } from './entity/ReportEntity';
export type * from './DetectionRunsDatasetTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { DetectionRunsDatasetEntityBase } from './DetectionRunsDatasetEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class DetectionRunsDatasetSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Report(entopts?: Record<string, any>): ReportEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): DetectionRunsDatasetSDK;
    tester(testopts?: any, sdkopts?: any): DetectionRunsDatasetSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof DetectionRunsDatasetSDK;
export { stdutil, config, BaseFeature, DetectionRunsDatasetEntityBase, DetectionRunsDatasetSDK, SDK, };
export type { DirectResult };
