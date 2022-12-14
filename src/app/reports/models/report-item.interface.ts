export interface ReportItem {
  paymentId: string;
  amount: number;
  projectId: string;
  gatewayId: string;
  userIds: string[];
  modified: string;
  created: string;
  projectName?: string;
  gatewayName?: string;
}
