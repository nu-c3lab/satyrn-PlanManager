const sampleRingFromAPI = {"targetEntities": ["Case", "DocketHTML", "Counsel", "Party", "OffenseLevel", "Role", "Judge", "JudgeLabel", "NatureOfSuit", "Court", "City", "State"], "defaultEntity": "Case", "filters": [["case_id", {"autocomplete": true, "type": "string", "allowMultiple": false, "nicename": "Case ID", "desc": null}], ["ucid", {"autocomplete": true, "type": "string", "allowMultiple": false, "nicename": "ucid", "desc": null}], ["case_pacer_id", {"autocomplete": true, "type": "string", "allowMultiple": false, "nicename": "Case Pacer ID", "desc": null}], ["monetary_demand", {"autocomplete": true, "type": "float", "allowMultiple": false, "nicename": "Monetary Demand", "desc": null}], ["billable_pages", {"autocomplete": true, "type": "integer", "allowMultiple": false, "nicename": "Billable Page", "desc": null}], ["is_multi", {"autocomplete": true, "type": "boolean", "allowMultiple": false, "nicename": "is_multi", "desc": null}], ["filing_date", {"autocomplete": true, "type": "date", "allowMultiple": false, "nicename": "Filing Date", "desc": null}], ["terminating_date", {"autocomplete": true, "type": "date", "allowMultiple": false, "nicename": "Terminating Date", "desc": null}], ["year", {"autocomplete": true, "type": "integer", "allowMultiple": false, "nicename": "Year", "desc": null}], ["case_name", {"autocomplete": true, "type": "string", "allowMultiple": false, "nicename": "Case Name", "desc": null}], ["jury_demand", {"autocomplete": true, "type": "string", "allowMultiple": false, "nicename": "Jury Demand", "desc": null}], ["cause", {"autocomplete": true, "type": "string", "allowMultiple": false, "nicename": "Cause", "desc": null}], ["jurisdiction", {"autocomplete": true, "type": "string", "allowMultiple": false, "nicename": "Jurisdiction", "desc": null}], ["case_flags", {"autocomplete": true, "type": "string", "allowMultiple": false, "nicename": "Case Flag", "desc": null}], ["case_duration", {"autocomplete": true, "type": "integer", "allowMultiple": false, "nicename": "Case Duration", "desc": null}], ["judge", {"autocomplete": true, "type": "string", "allowMultiple": false, "nicename": "Judge", "desc": null}], ["referred_judges", {"autocomplete": true, "type": "string", "allowMultiple": false, "nicename": "Referred Judge", "desc": null}], ["case_status", {"autocomplete": true, "type": "string", "allowMultiple": false, "nicename": "Case Status", "desc": null}], ["source", {"autocomplete": true, "type": "string", "allowMultiple": false, "nicename": "Source", "desc": null}], ["cost", {"autocomplete": true, "type": "float", "allowMultiple": false, "nicename": "Cost", "desc": null}], ["download_url", {"autocomplete": true, "type": "string", "allowMultiple": false, "nicename": "Download URL", "desc": null}], ["docket_available", {"autocomplete": true, "type": "boolean", "allowMultiple": false, "nicename": "Docket Availability", "desc": null}], ["case_type", {"autocomplete": true, "type": "string", "allowMultiple": false, "nicename": "Case Type", "desc": null}], ["case_NOS", {"autocomplete": true, "type": "string", "allowMultiple": false, "nicename": "Nature of Suit", "desc": null}], ["docket_text", {"autocomplete": true, "type": "string", "allowMultiple": false, "nicename": "Docket Text", "desc": null}], ["ifp_label", {"autocomplete": true, "type": "string", "allowMultiple": false, "nicename": "ifp Label", "desc": null}], ["court_name", {"autocomplete": true, "type": "string", "allowMultiple": false, "nicename": "Court Name", "desc": null}]], "columns": [{"key": "case_id", "nicename": "Case ID", "width": "3.7037037037037037%", "sortable": true}, {"key": "filing_date", "nicename": "Filing Date", "width": "3.7037037037037037%", "sortable": true}, {"key": "terminating_date", "nicename": "Terminating Date", "width": "3.7037037037037037%", "sortable": true}, {"key": "case_name", "nicename": "Case Name", "width": "3.7037037037037037%", "sortable": true}, {"key": "cause", "nicename": "Cause", "width": "3.7037037037037037%", "sortable": true}, {"key": "jurisdiction", "nicename": "Jurisdiction", "width": "3.7037037037037037%", "sortable": true}, {"key": "source", "nicename": "Source", "width": "3.7037037037037037%", "sortable": true}], "defaultSort": {"key": "case_id", "direction": "desc"}, "fieldUnits": {}, "analysisSpace": {"_self": {"entity": "Case", "nicename": ["Case", "Case"], "relType": "o2o", "attributes": [{"type": "string", "nicename": ["Case ID", "Case IDs"], "unit": null, "targetField": "case_id"}, {"type": "string", "nicename": ["ucid", "ucids"], "unit": null, "targetField": "ucid"}, {"type": "string", "nicename": ["Case Pacer ID", "Case Pacer IDs"], "unit": null, "targetField": "case_pacer_id"}, {"type": "float", "nicename": ["Monetary Demand", "Monetary Demands"], "unit": ["dollar", "dollars"], "targetField": "monetary_demand"}, {"type": "integer", "nicename": ["Billable Page", "Billable Pages"], "unit": null, "targetField": "billable_pages"}, {"type": "boolean", "nicename": ["is_multi", "is_multi"], "unit": null, "targetField": "is_multi"}, {"type": "date", "nicename": ["Filing Date", "Filing Dates"], "unit": null, "targetField": "filing_date"}, {"type": "date", "nicename": ["Terminating Date", "Terminating Dates"], "unit": null, "targetField": "terminating_date"}, {"type": "integer", "nicename": ["Year", "Years"], "unit": null, "targetField": "year"}, {"type": "string", "nicename": ["Case Name", "Case Names"], "unit": null, "targetField": "case_name"}, {"type": "string", "nicename": ["Jury Demand", "Jury Demands"], "unit": null, "targetField": "jury_demand"}, {"type": "string", "nicename": ["Cause", "Causes"], "unit": null, "targetField": "cause"}, {"type": "string", "nicename": ["Jurisdiction", "Jurisdictions"], "unit": null, "targetField": "jurisdiction"}, {"type": "string", "nicename": ["Case Flag", "Case Flags"], "unit": null, "targetField": "case_flags"}, {"type": "integer", "nicename": ["Case Duration", "Case Durations"], "unit": null, "targetField": "case_duration"}, {"type": "string", "nicename": ["Judge", "Judges"], "unit": null, "targetField": "judge"}, {"type": "string", "nicename": ["Referred Judge", "Referred Judges"], "unit": null, "targetField": "referred_judges"}, {"type": "string", "nicename": ["Case Status", "Case Status"], "unit": null, "targetField": "case_status"}, {"type": "string", "nicename": ["Source", "Sources"], "unit": null, "targetField": "source"}, {"type": "float", "nicename": ["Cost", "Costs"], "unit": ["dollar", "dollars"], "targetField": "cost"}, {"type": "string", "nicename": ["Download URL", "Download URLS"], "unit": null, "targetField": "download_url"}, {"type": "boolean", "nicename": ["Docket Availability", "Docket Availability"], "unit": null, "targetField": "docket_available"}, {"type": "string", "nicename": ["Case Type", "Case Types"], "unit": null, "targetField": "case_type"}, {"type": "string", "nicename": ["Nature of Suit", "Nature of Suits"], "unit": null, "targetField": "case_NOS"}, {"type": "string", "nicename": ["Docket Text", "Docket Texts"], "unit": null, "targetField": "docket_text"}, {"type": "string", "nicename": ["ifp Label", "ifp Labels"], "unit": null, "targetField": "ifp_label"}, {"type": "string", "nicename": ["Court Name", "Court Names"], "unit": null, "targetField": "court_name"}, {"type": "id", "nicename": false, "unit": "Case", "targetField": "id"}]}, "CaseToJudge": {"entity": "Judge", "nicename": ["Judge", "Judge"], "relType": "m2m", "attributes": [{"type": "string", "nicename": ["sjid", "sjids"], "unit": null, "targetField": "sjid"}, {"type": "integer", "nicename": ["Head ucid", "Head ucids"], "unit": null, "targetField": "head_ucids"}, {"type": "integer", "nicename": ["Tot ucid", "Tot ucids"], "unit": null, "targetField": "tot_ucids"}, {"type": "string", "nicename": ["nid", "nids"], "unit": null, "targetField": "nid"}, {"type": "string", "nicename": ["Name", "Names"], "unit": null, "targetField": "name"}, {"type": "string", "nicename": ["Presentable Name", "Presentable Names"], "unit": null, "targetField": "presentable_name"}, {"type": "string", "nicename": ["Full Name", "Full Names"], "unit": null, "targetField": "full_name"}, {"type": "id", "nicename": false, "unit": "Judge", "targetField": "id"}]}, "CaseToNOS": {"entity": "NatureOfSuit", "nicename": ["NatureOfSuit", "NatureOfSuit"], "relType": "o2m", "attributes": [{"type": "integer", "nicename": ["Number", "Numbers"], "unit": null, "targetField": "number"}, {"type": "string", "nicename": ["Name", "Names"], "unit": null, "targetField": "name"}, {"type": "string", "nicename": ["Sub Type", "Sub Types"], "unit": null, "targetField": "sub_type"}, {"type": "string", "nicename": ["Major Type", "Major Types"], "unit": null, "targetField": "major_type"}, {"type": "id", "nicename": false, "unit": "NatureOfSuit", "targetField": "id"}]}}, "includesRenderer": false, "targetModelName": "Case", "operations": {"average": {"required": {"target": {"validInputs": ["integer", "float"], "fieldType": "target"}}, "template": "Average {target}", "units": "unchanged", "type": "simple", "optional": {"groupBy": {"allowed": true, "maxDepth": 2, "validInputs": ["id", "integer", "float", "string", "boolean"], "parameters": [{"inputTypes": ["integer", "float"], "options": ["percentile", "threshold"], "allowMultiple": false}]}, "timeSeries": {"allowed": true, "maxDepth": 1, "validInputs": ["date", "datetime", "date:year"]}}}, "count": {"required": {"target": {"validInputs": ["id"], "fieldType": "target"}}, "template": "Count of unique {target}", "units": "unchanged", "type": "simple", "optional": {"groupBy": {"allowed": true, "maxDepth": 2, "validInputs": ["id", "integer", "float", "string", "boolean"], "parameters": [{"inputTypes": ["integer", "float"], "options": ["percentile", "threshold"], "allowMultiple": false}]}, "timeSeries": {"allowed": true, "maxDepth": 1, "validInputs": ["date", "datetime", "date:year"]}}}, "sum": {"required": {"target": {"validInputs": ["integer", "float"], "fieldType": "target"}}, "template": "Total {target}", "units": "unchanged", "type": "simple", "optional": {"groupBy": {"allowed": true, "maxDepth": 2, "validInputs": ["id", "integer", "float", "string", "boolean"], "parameters": [{"inputTypes": ["integer", "float"], "options": ["percentile", "threshold"], "allowMultiple": false}]}, "timeSeries": {"allowed": true, "maxDepth": 1, "validInputs": ["date", "datetime", "date:year"]}}}, "min": {"required": {"target": {"validInputs": ["integer", "float"], "fieldType": "target"}}, "template": "Min of {target}", "units": "unchanged", "type": "simple", "optional": {"groupBy": {"allowed": true, "maxDepth": 2, "validInputs": ["id", "integer", "float", "string", "boolean"], "parameters": [{"inputTypes": ["integer", "float"], "options": ["percentile", "threshold"], "allowMultiple": false}]}, "timeSeries": {"allowed": true, "maxDepth": 1, "validInputs": ["date", "datetime", "date:year"]}}}, "max": {"required": {"target": {"validInputs": ["integer", "float"], "fieldType": "target"}}, "template": "Max of {target}", "units": "unchanged", "type": "simple", "optional": {"groupBy": {"allowed": true, "maxDepth": 2, "validInputs": ["id", "integer", "float", "string", "boolean"], "parameters": [{"inputTypes": ["integer", "float"], "options": ["percentile", "threshold"], "allowMultiple": false}]}, "timeSeries": {"allowed": true, "maxDepth": 1, "validInputs": ["date", "datetime", "date:year"]}}}, "median": {"required": {"target": {"validInputs": ["integer", "float"], "fieldType": "target"}}, "template": "Median {target}", "units": "unchanged", "type": "simple", "optional": {"groupBy": {"allowed": true, "maxDepth": 2, "validInputs": ["id", "integer", "float", "string", "boolean"], "parameters": [{"inputTypes": ["integer", "float"], "options": ["percentile", "threshold"], "allowMultiple": false}]}, "timeSeries": {"allowed": true, "maxDepth": 1, "validInputs": ["date", "datetime", "date:year"]}}}, "averageCount": {"required": {"target": {"validInputs": ["id"], "fieldType": "target"}, "per": {"validInputs": ["id"], "fieldType": "group"}}, "template": "Average Count of {target} per {per}", "units": "target/per", "type": "recursive", "optional": {"groupBy": {"allowed": true, "maxDepth": 2, "validInputs": ["id", "integer", "float", "string", "boolean"], "parameters": [{"inputTypes": ["integer", "float"], "options": ["percentile", "threshold"], "allowMultiple": false}]}, "timeSeries": {"allowed": true, "maxDepth": 1, "validInputs": ["date", "datetime", "date:year"]}}}, "averageSum": {"required": {"target": {"validInputs": ["float", "integer"], "fieldType": "target"}, "per": {"validInputs": ["id"], "fieldType": "group"}}, "template": "Average Sum of {target} per {per}", "units": "target/per", "type": "recursive", "optional": {"groupBy": {"allowed": true, "maxDepth": 2, "validInputs": ["id", "integer", "float", "string", "boolean"], "parameters": [{"inputTypes": ["integer", "float"], "options": ["percentile", "threshold"], "allowMultiple": false}]}, "timeSeries": {"allowed": true, "maxDepth": 1, "validInputs": ["date", "datetime", "date:year"]}}}, "percentage": {"required": {"target": {"validInputs": ["string", "boolean"], "fieldType": "target", "parameters": [{"question": "language to be asked goes here", "inputTypes": ["boolean", "string"], "options": "any", "allowMultiple": true}]}}, "template": "Percentage of {target}", "units": "percentage", "type": "simple", "optional": {"groupBy": {"allowed": true, "maxDepth": 2, "validInputs": ["id", "integer", "float", "string", "boolean"], "parameters": [{"inputTypes": ["integer", "float"], "options": ["percentile", "threshold"], "allowMultiple": false}]}, "timeSeries": {"allowed": true, "maxDepth": 1, "validInputs": ["date", "datetime", "date:year"]}}}, "oneHot": {"required": {"target": {"validInputs": ["string", "boolean"], "fieldType": "target", "parameters": [{"question": "language to be asked goes here", "inputTypes": ["boolean", "string"], "options": "any", "allowMultiple": true}]}}, "units": "none", "type": "simple", "optional": {"groupBy": {"allowed": true, "maxDepth": 2, "validInputs": ["id", "integer", "float", "string", "boolean"], "parameters": [{"inputTypes": ["integer", "float"], "options": ["percentile", "threshold"], "allowMultiple": false}]}, "timeSeries": {"allowed": true, "maxDepth": 1, "validInputs": ["date", "datetime", "date:year"]}}}, "None": {"required": {"target": {"validInputs": ["integer", "float", "boolean", "string"], "fieldType": "target"}}, "units": "unchanged", "type": "simple", "optional": {"groupBy": {"allowed": true, "maxDepth": 2, "validInputs": ["id", "integer", "float", "string", "boolean"], "parameters": [{"inputTypes": ["integer", "float"], "options": ["percentile", "threshold"], "allowMultiple": false}]}, "timeSeries": {"allowed": true, "maxDepth": 1, "validInputs": ["date", "datetime", "date:year"]}}}, "summaryStatistics": {"required": {"target": {"validInputs": ["integer", "float"], "fieldType": "target", "parameters": []}}, "optional": {"groupBy": {"allowed": true, "maxDepth": 2, "validInputs": ["id", "integer", "float", "string", "boolean"], "parameters": [{"inputTypes": ["integer", "float"], "options": ["percentile", "threshold"], "allowMultiple": false}]}, "timeSeries": {"allowed": true, "maxDepth": 1, "validInputs": ["date", "datetime", "date:year"]}}, "spawned": {"target0": {"spawnOf": "target", "fieldType": "target"}, "target1": {"spawnOf": "target", "fieldType": "target"}, "target2": {"spawnOf": "target", "fieldType": "target"}, "target3": {"spawnOf": "target", "fieldType": "target"}}, "template": "Summary Statistics of {target}", "type": "complex"}, "correlation": {"required": {"target1": {"validInputs": ["string", "boolean", "integer", "float", "id"], "fieldType": "target", "parameters": [{"question": "language to be asked goes here", "inputTypes": ["boolean", "string"], "options": "any", "allowMultiple": false}, {"question": "language to be asked goes here", "inputTypes": ["integer", "float"], "options": "aggregation", "required": false, "allowMultiple": false}, {"question": "language to be asked goes here", "inputTypes": ["id"], "options": "aggregation", "required": false, "allowMultiple": false}]}, "target2": {"validInputs": ["string", "boolean", "integer", "float", "id"], "fieldType": "target", "parameters": [{"question": "language to be asked goes here", "inputTypes": ["boolean", "string"], "options": "any", "allowMultiple": true}, {"question": "language to be asked goes here", "inputTypes": ["int", "float"], "options": "aggregation", "required": false, "allowMultiple": false}, {"question": "language to be asked goes here", "inputTypes": ["id"], "options": "aggregation", "required": false, "allowMultiple": false}]}, "group": {"internalId": "group", "fieldType": "group", "validInputs": ["id", "boolean"], "parameters": null}}, "optional": {"groupBy": {"allowed": true, "maxDepth": 1, "validInputs": ["id", "integer", "float", "string", "boolean"], "parameters": [{"inputTypes": ["integer", "float"], "options": ["percentile", "threshold"], "allowMultiple": false}]}, "timeSeries": {"allowed": true, "maxDepth": 1, "validInputs": ["date", "datetime", "date:year"]}}, "template": "Correlation between {group}'s {target1} and {target2}", "type": "complex"}, "comparison": {"required": {"target1": {"validInputs": ["string", "boolean", "integer", "float", "id"], "fieldType": "target", "parameters": [{"question": "language to be asked goes here", "inputTypes": ["boolean", "string"], "options": "any", "allowMultiple": false}, {"question": "language to be asked goes here", "inputTypes": ["int", "float"], "options": "aggregation", "required": false, "allowMultiple": false}, {"question": "language to be asked goes here", "inputTypes": ["id"], "options": "aggregation", "required": false, "allowMultiple": false}]}, "target2": {"validInputs": ["string", "boolean", "integer", "float", "id"], "fieldType": "target", "parameters": [{"question": "language to be asked goes here", "inputTypes": ["boolean", "string"], "options": "any", "allowMultiple": true}, {"question": "language to be asked goes here", "inputTypes": ["int", "float"], "options": "aggregation", "required": false, "allowMultiple": false}, {"question": "language to be asked goes here", "inputTypes": ["id"], "options": "aggregation", "required": false, "allowMultiple": false}]}, "group": {"internalId": "group", "fieldType": "group", "validInputs": ["id", "boolean"], "parameters": null}}, "optional": {"groupBy": {"allowed": true, "maxDepth": 1, "validInputs": ["id", "integer", "float", "string", "boolean"], "parameters": [{"inputTypes": ["integer", "float"], "options": ["percentile", "threshold"], "allowMultiple": false}]}, "timeSeries": {"allowed": true, "maxDepth": 1, "validInputs": ["date", "datetime", "date:year"]}}, "template": "Comparison between {group}'s {target1} and {target2}", "type": "complex"}, "distribution": {"required": {"target": {"validInputs": ["integer", "float", "average", "count"], "fieldType": "target", "parameters": [{"question": "language to be asked goes here", "inputTypes": ["integer", "float"], "options": "aggregation", "required": false, "allowMultiple": false}]}, "over": {"fieldType": "group", "validInputs": ["id", "boolean", "string"], "parameters": null}}, "optional": {"groupBy": {"allowed": true, "maxDepth": 1, "validInputs": ["id", "integer", "float", "string", "boolean"], "parameters": [{"inputTypes": ["integer", "float"], "options": ["percentile", "threshold"], "allowMultiple": false}]}, "timeSeries": {"allowed": true, "maxDepth": 1, "validInputs": ["date", "datetime", "date:year"]}}, "template": "Distribution of {target} over {over}", "type": "complex"}}}

const sampleAnalysisOutputs = []

export {sampleRingFromAPI, sampleAnalysisOutputs}
