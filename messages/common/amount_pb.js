/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var common_unit_pb = require('../common/unit_pb.js');
goog.object.extend(proto, common_unit_pb);
goog.exportSymbol('proto.ledger.core.message.common.Amount', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ledger.core.message.common.Amount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ledger.core.message.common.Amount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ledger.core.message.common.Amount.displayName = 'proto.ledger.core.message.common.Amount';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ledger.core.message.common.Amount.prototype.toObject = function(opt_includeInstance) {
  return proto.ledger.core.message.common.Amount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ledger.core.message.common.Amount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ledger.core.message.common.Amount.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFieldWithDefault(msg, 1, ""),
    unit: (f = msg.getUnit()) && common_unit_pb.Unit.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ledger.core.message.common.Amount}
 */
proto.ledger.core.message.common.Amount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ledger.core.message.common.Amount;
  return proto.ledger.core.message.common.Amount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ledger.core.message.common.Amount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ledger.core.message.common.Amount}
 */
proto.ledger.core.message.common.Amount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 2:
      var value = new common_unit_pb.Unit;
      reader.readMessage(value,common_unit_pb.Unit.deserializeBinaryFromReader);
      msg.setUnit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ledger.core.message.common.Amount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ledger.core.message.common.Amount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ledger.core.message.common.Amount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ledger.core.message.common.Amount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUnit();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_unit_pb.Unit.serializeBinaryToWriter
    );
  }
};


/**
 * optional string value = 1;
 * @return {string}
 */
proto.ledger.core.message.common.Amount.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ledger.core.message.common.Amount.prototype.setValue = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Unit unit = 2;
 * @return {?proto.ledger.core.message.common.Unit}
 */
proto.ledger.core.message.common.Amount.prototype.getUnit = function() {
  return /** @type{?proto.ledger.core.message.common.Unit} */ (
    jspb.Message.getWrapperField(this, common_unit_pb.Unit, 2));
};


/** @param {?proto.ledger.core.message.common.Unit|undefined} value */
proto.ledger.core.message.common.Amount.prototype.setUnit = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.ledger.core.message.common.Amount.prototype.clearUnit = function() {
  this.setUnit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ledger.core.message.common.Amount.prototype.hasUnit = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.ledger.core.message.common);
