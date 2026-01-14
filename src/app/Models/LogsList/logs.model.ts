export interface Logs {
    conversation_name ?: string,
    assigned_status ?: string,
    assigned_agent ?: string,
    status ?: string,
    last_message ?: string,
    transfer_count_bot ?: number,
    transfer_count_human ?: number,
    customer_psid ?: number,
    conversation_id ?: number,
    date_created ?: Date,
    lead_stage ?: string,
    relationship_stage ?: string,
}
