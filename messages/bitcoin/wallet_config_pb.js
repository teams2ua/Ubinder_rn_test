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

var bitcoin_account_config_pb = require('../bitcoin/account_config_pb.js');
goog.object.extend(proto, bitcoin_account_config_pb);
goog.exportSymbol('proto.ledger.core.message.bitcoin.WalletSetting', null, global);
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
proto.ledger.core.message.bitcoin.WalletSetting = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ledger.core.message.bitcoin.WalletSetting, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ledger.core.message.bitcoin.WalletSetting.displayName = 'proto.ledger.core.message.bitcoin.WalletSetting';
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
proto.ledger.core.message.bitcoin.WalletSetting.prototype.toObject = function(opt_includeInstance) {
  return proto.ledger.core.message.bitcoin.WalletSetting.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ledger.core.message.bitcoin.WalletSetting} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ledger.core.message.bitcoin.WalletSetting.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultAccountConfiguration: (f = msg.getDefaultAccountConfiguration()) && bitcoin_account_config_pb.AccountConfiguration.toObject(includeInstance, f)
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
 * @return {!proto.ledger.core.message.bitcoin.WalletSetting}
 */
proto.ledger.core.message.bitcoin.WalletSetting.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ledger.core.message.bitcoin.WalletSetting;
  return proto.ledger.core.message.bitcoin.WalletSetting.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ledger.core.message.bitcoin.WalletSetting} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ledger.core.message.bitcoin.WalletSetting}
 */
proto.ledger.core.message.bitcoin.WalletSetting.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new bitcoin_account_config_pb.AccountConfiguration;
      reader.readMessage(value,bitcoin_account_config_pb.AccountConfiguration.deserializeBinaryFromReader);
      msg.setDefaultAccountConfiguration(value);
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
proto.ledger.core.message.bitcoin.WalletSetting.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ledger.core.message.bitcoin.WalletSetting.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ledger.core.message.bitcoin.WalletSetting} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ledger.core.message.bitcoin.WalletSetting.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDefaultAccountConfiguration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      bitcoin_account_config_pb.AccountConfiguration.serializeBinaryToWriter
    );
  }
};


/**
 * optional AccountConfiguration default_account_configuration = 1;
 * @return {?proto.ledger.core.message.bitcoin.AccountConfiguration}
 */
proto.ledger.core.message.bitcoin.WalletSetting.prototype.getDefaultAccountConfiguration = function() {
  return /** @type{?proto.ledger.core.message.bitcoin.AccountConfiguration} */ (
    jspb.Message.getWrapperField(this, bitcoin_account_config_pb.AccountConfiguration, 1));
};


/** @param {?proto.ledger.core.message.bitcoin.AccountConfiguration|undefined} value */
proto.ledger.core.message.bitcoin.WalletSetting.prototype.setDefaultAccountConfiguration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.ledger.core.message.bitcoin.WalletSetting.prototype.clearDefaultAccountConfiguration = function() {
  this.setDefaultAccountConfiguration(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ledger.core.message.bitcoin.WalletSetting.prototype.hasDefaultAccountConfiguration = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.ledger.core.message.bitcoin);
