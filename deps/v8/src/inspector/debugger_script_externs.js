// Copyright 2016 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @const
 */
var Debug = {};

Debug.clearAllBreakPoints = function() {}

/** @return {!Array<!Script>} */
Debug.scripts = function() {}

/**
 * @param {number} scriptId
 * @param {number=} line
 * @param {number=} column
 * @param {string=} condition
 * @param {string=} groupId
 */
Debug.setScriptBreakPointById = function(scriptId, line, column, condition, groupId) {}

/** @typedef {{
 *    script: number,
 *    position: number,
 *    line: number,
 *    column:number,
 *    start: number,
 *    end: number,
 *    }}
 */
var SourceLocation;

/**
 * @param {number} breakId
 * @return {!Array<!SourceLocation>}
 */
Debug.findBreakPointActualLocations = function(breakId) {}

/**
 * @param {number} breakId
 * @param {boolean} remove
 * @return {!BreakPoint|undefined}
 */
Debug.findBreakPoint = function(breakId, remove) {}

/** @const */
var LiveEdit = {}

/**
 * @param {!Script} script
 * @param {string} newSource
 * @param {boolean} previewOnly
 * @return {!{stack_modified: (boolean|undefined)}}
 */
LiveEdit.SetScriptSource = function(script, newSource, previewOnly, change_log) {}

/** @constructor */
function Failure() {}
LiveEdit.Failure = Failure;

Debug.LiveEdit = LiveEdit;

/** @typedef {{
 *    type: string,
 *    syntaxErrorMessage: string,
 *    position: !{start: !{line: number, column: number}},
 *  }}
 */
var LiveEditErrorDetails;

/** @typedef {{
 *    breakpointId: number,
 *    sourceID: number,
 *    lineNumber: (number|undefined),
 *    columnNumber: (number|undefined),
 *    condition: (string|undefined),
 *    interstatementLocation: (boolean|undefined),
 *    }}
 */
var BreakpointInfo;


/** @interface */
function BreakPoint() {}

/** @return {!BreakPoint|undefined} */
BreakPoint.prototype.script_break_point = function() {}

/** @return {number} */
BreakPoint.prototype.number = function() {}


/** @interface */
function ExecutionState() {}

/** @typedef{{
 *    id: number,
 *    }}
 */
var Script;
