/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "OakSave";

export interface Vec3 {
  x: number;
  y: number;
  z: number;
}

export interface GameStatSaveGameData {
  statValue: number;
  statPath: string;
}

export interface InventoryCategorySaveData {
  baseCategoryDefinitionHash: number;
  quantity: number;
}

export interface OakSDUSaveGameData {
  sduLevel: number;
  sduDataPath: string;
}

export interface RegisteredDownloadableEntitlement {
  id: number;
  consumed: number;
  registered: boolean;
  seen: boolean;
}

export interface RegisteredDownloadableEntitlements {
  entitlementSourceAssetPath: string;
  entitlementIds: number[];
  entitlements: RegisteredDownloadableEntitlement[];
}

export interface ChallengeStatSaveGameData {
  currentStatValue: number;
  challengeStatPath: string;
}

export interface OakChallengeRewardSaveGameData {
  challengeRewardClaimed: boolean;
}

export interface ChallengeSaveGameData {
  completedCount: number;
  isActive: boolean;
  currentlyCompleted: boolean;
  completedProgressLevel: number;
  progressCounter: number;
  statInstanceState: ChallengeStatSaveGameData[];
  challengeClassPath: string;
  challengeRewardInfo: OakChallengeRewardSaveGameData[];
}

export interface OakMailItem {
  mailItemType: number;
  senderDisplayName: string;
  subject: string;
  body: string;
  gearSerialNumber: string;
  mailGuid: string;
  dateSent: number;
  expirationDate: number;
  fromPlayerId: string;
  hasBeenRead: boolean;
}

export interface OakCustomizationSaveGameData {
  isNew: boolean;
  customizationAssetPath: string;
}

export interface OakInventoryCustomizationPartInfo {
  customizationPartHash: number;
  isNew: boolean;
}

export interface OakProfileCustomizationLinkData {
  customizationName: string;
  active: boolean;
}

export interface InventoryBalanceStateInitializationData {
  gameStage: number;
  inventoryData: string;
  inventoryBalanceData: string;
  manufacturerData: string;
  partList: string[];
  genericPartList: string[];
  additionalData: Uint8Array;
  customizationPartList: string[];
}

export interface OakInventoryItemSaveGameData {
  itemSerialNumber: Uint8Array;
  pickupOrderIndex: number;
  flags: number;
  developmentSaveData: InventoryBalanceStateInitializationData | undefined;
}

function createBaseVec3(): Vec3 {
  return { x: 0, y: 0, z: 0 };
}

export const Vec3 = {
  encode(message: Vec3, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.x !== 0) {
      writer.uint32(13).float(message.x);
    }
    if (message.y !== 0) {
      writer.uint32(21).float(message.y);
    }
    if (message.z !== 0) {
      writer.uint32(29).float(message.z);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Vec3 {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVec3();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.x = reader.float();
          break;
        case 2:
          message.y = reader.float();
          break;
        case 3:
          message.z = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Vec3 {
    return {
      x: isSet(object.x) ? Number(object.x) : 0,
      y: isSet(object.y) ? Number(object.y) : 0,
      z: isSet(object.z) ? Number(object.z) : 0,
    };
  },

  toJSON(message: Vec3): unknown {
    const obj: any = {};
    message.x !== undefined && (obj.x = message.x);
    message.y !== undefined && (obj.y = message.y);
    message.z !== undefined && (obj.z = message.z);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Vec3>, I>>(object: I): Vec3 {
    const message = createBaseVec3();
    message.x = object.x ?? 0;
    message.y = object.y ?? 0;
    message.z = object.z ?? 0;
    return message;
  },
};

function createBaseGameStatSaveGameData(): GameStatSaveGameData {
  return { statValue: 0, statPath: "" };
}

export const GameStatSaveGameData = {
  encode(
    message: GameStatSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.statValue !== 0) {
      writer.uint32(8).int32(message.statValue);
    }
    if (message.statPath !== "") {
      writer.uint32(18).string(message.statPath);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GameStatSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameStatSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.statValue = reader.int32();
          break;
        case 2:
          message.statPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameStatSaveGameData {
    return {
      statValue: isSet(object.statValue) ? Number(object.statValue) : 0,
      statPath: isSet(object.statPath) ? String(object.statPath) : "",
    };
  },

  toJSON(message: GameStatSaveGameData): unknown {
    const obj: any = {};
    message.statValue !== undefined &&
      (obj.statValue = Math.round(message.statValue));
    message.statPath !== undefined && (obj.statPath = message.statPath);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GameStatSaveGameData>, I>>(
    object: I
  ): GameStatSaveGameData {
    const message = createBaseGameStatSaveGameData();
    message.statValue = object.statValue ?? 0;
    message.statPath = object.statPath ?? "";
    return message;
  },
};

function createBaseInventoryCategorySaveData(): InventoryCategorySaveData {
  return { baseCategoryDefinitionHash: 0, quantity: 0 };
}

export const InventoryCategorySaveData = {
  encode(
    message: InventoryCategorySaveData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.baseCategoryDefinitionHash !== 0) {
      writer.uint32(8).uint32(message.baseCategoryDefinitionHash);
    }
    if (message.quantity !== 0) {
      writer.uint32(16).int32(message.quantity);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InventoryCategorySaveData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInventoryCategorySaveData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseCategoryDefinitionHash = reader.uint32();
          break;
        case 2:
          message.quantity = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InventoryCategorySaveData {
    return {
      baseCategoryDefinitionHash: isSet(object.baseCategoryDefinitionHash)
        ? Number(object.baseCategoryDefinitionHash)
        : 0,
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
    };
  },

  toJSON(message: InventoryCategorySaveData): unknown {
    const obj: any = {};
    message.baseCategoryDefinitionHash !== undefined &&
      (obj.baseCategoryDefinitionHash = Math.round(
        message.baseCategoryDefinitionHash
      ));
    message.quantity !== undefined &&
      (obj.quantity = Math.round(message.quantity));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InventoryCategorySaveData>, I>>(
    object: I
  ): InventoryCategorySaveData {
    const message = createBaseInventoryCategorySaveData();
    message.baseCategoryDefinitionHash = object.baseCategoryDefinitionHash ?? 0;
    message.quantity = object.quantity ?? 0;
    return message;
  },
};

function createBaseOakSDUSaveGameData(): OakSDUSaveGameData {
  return { sduLevel: 0, sduDataPath: "" };
}

export const OakSDUSaveGameData = {
  encode(
    message: OakSDUSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sduLevel !== 0) {
      writer.uint32(8).int32(message.sduLevel);
    }
    if (message.sduDataPath !== "") {
      writer.uint32(18).string(message.sduDataPath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OakSDUSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOakSDUSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sduLevel = reader.int32();
          break;
        case 2:
          message.sduDataPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OakSDUSaveGameData {
    return {
      sduLevel: isSet(object.sduLevel) ? Number(object.sduLevel) : 0,
      sduDataPath: isSet(object.sduDataPath) ? String(object.sduDataPath) : "",
    };
  },

  toJSON(message: OakSDUSaveGameData): unknown {
    const obj: any = {};
    message.sduLevel !== undefined &&
      (obj.sduLevel = Math.round(message.sduLevel));
    message.sduDataPath !== undefined &&
      (obj.sduDataPath = message.sduDataPath);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OakSDUSaveGameData>, I>>(
    object: I
  ): OakSDUSaveGameData {
    const message = createBaseOakSDUSaveGameData();
    message.sduLevel = object.sduLevel ?? 0;
    message.sduDataPath = object.sduDataPath ?? "";
    return message;
  },
};

function createBaseRegisteredDownloadableEntitlement(): RegisteredDownloadableEntitlement {
  return { id: 0, consumed: 0, registered: false, seen: false };
}

export const RegisteredDownloadableEntitlement = {
  encode(
    message: RegisteredDownloadableEntitlement,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.consumed !== 0) {
      writer.uint32(16).uint32(message.consumed);
    }
    if (message.registered === true) {
      writer.uint32(24).bool(message.registered);
    }
    if (message.seen === true) {
      writer.uint32(32).bool(message.seen);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegisteredDownloadableEntitlement {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredDownloadableEntitlement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.consumed = reader.uint32();
          break;
        case 3:
          message.registered = reader.bool();
          break;
        case 4:
          message.seen = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisteredDownloadableEntitlement {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      consumed: isSet(object.consumed) ? Number(object.consumed) : 0,
      registered: isSet(object.registered) ? Boolean(object.registered) : false,
      seen: isSet(object.seen) ? Boolean(object.seen) : false,
    };
  },

  toJSON(message: RegisteredDownloadableEntitlement): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.consumed !== undefined &&
      (obj.consumed = Math.round(message.consumed));
    message.registered !== undefined && (obj.registered = message.registered);
    message.seen !== undefined && (obj.seen = message.seen);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<RegisteredDownloadableEntitlement>, I>
  >(object: I): RegisteredDownloadableEntitlement {
    const message = createBaseRegisteredDownloadableEntitlement();
    message.id = object.id ?? 0;
    message.consumed = object.consumed ?? 0;
    message.registered = object.registered ?? false;
    message.seen = object.seen ?? false;
    return message;
  },
};

function createBaseRegisteredDownloadableEntitlements(): RegisteredDownloadableEntitlements {
  return {
    entitlementSourceAssetPath: "",
    entitlementIds: [],
    entitlements: [],
  };
}

export const RegisteredDownloadableEntitlements = {
  encode(
    message: RegisteredDownloadableEntitlements,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.entitlementSourceAssetPath !== "") {
      writer.uint32(10).string(message.entitlementSourceAssetPath);
    }
    writer.uint32(18).fork();
    for (const v of message.entitlementIds) {
      writer.int64(v);
    }
    writer.ldelim();
    for (const v of message.entitlements) {
      RegisteredDownloadableEntitlement.encode(
        v!,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegisteredDownloadableEntitlements {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredDownloadableEntitlements();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.entitlementSourceAssetPath = reader.string();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.entitlementIds.push(longToNumber(reader.int64() as Long));
            }
          } else {
            message.entitlementIds.push(longToNumber(reader.int64() as Long));
          }
          break;
        case 3:
          message.entitlements.push(
            RegisteredDownloadableEntitlement.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisteredDownloadableEntitlements {
    return {
      entitlementSourceAssetPath: isSet(object.entitlementSourceAssetPath)
        ? String(object.entitlementSourceAssetPath)
        : "",
      entitlementIds: Array.isArray(object?.entitlementIds)
        ? object.entitlementIds.map((e: any) => Number(e))
        : [],
      entitlements: Array.isArray(object?.entitlements)
        ? object.entitlements.map((e: any) =>
            RegisteredDownloadableEntitlement.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: RegisteredDownloadableEntitlements): unknown {
    const obj: any = {};
    message.entitlementSourceAssetPath !== undefined &&
      (obj.entitlementSourceAssetPath = message.entitlementSourceAssetPath);
    if (message.entitlementIds) {
      obj.entitlementIds = message.entitlementIds.map((e) => Math.round(e));
    } else {
      obj.entitlementIds = [];
    }
    if (message.entitlements) {
      obj.entitlements = message.entitlements.map((e) =>
        e ? RegisteredDownloadableEntitlement.toJSON(e) : undefined
      );
    } else {
      obj.entitlements = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<RegisteredDownloadableEntitlements>, I>
  >(object: I): RegisteredDownloadableEntitlements {
    const message = createBaseRegisteredDownloadableEntitlements();
    message.entitlementSourceAssetPath =
      object.entitlementSourceAssetPath ?? "";
    message.entitlementIds = object.entitlementIds?.map((e) => e) || [];
    message.entitlements =
      object.entitlements?.map((e) =>
        RegisteredDownloadableEntitlement.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseChallengeStatSaveGameData(): ChallengeStatSaveGameData {
  return { currentStatValue: 0, challengeStatPath: "" };
}

export const ChallengeStatSaveGameData = {
  encode(
    message: ChallengeStatSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.currentStatValue !== 0) {
      writer.uint32(8).int32(message.currentStatValue);
    }
    if (message.challengeStatPath !== "") {
      writer.uint32(18).string(message.challengeStatPath);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChallengeStatSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeStatSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentStatValue = reader.int32();
          break;
        case 2:
          message.challengeStatPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChallengeStatSaveGameData {
    return {
      currentStatValue: isSet(object.currentStatValue)
        ? Number(object.currentStatValue)
        : 0,
      challengeStatPath: isSet(object.challengeStatPath)
        ? String(object.challengeStatPath)
        : "",
    };
  },

  toJSON(message: ChallengeStatSaveGameData): unknown {
    const obj: any = {};
    message.currentStatValue !== undefined &&
      (obj.currentStatValue = Math.round(message.currentStatValue));
    message.challengeStatPath !== undefined &&
      (obj.challengeStatPath = message.challengeStatPath);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChallengeStatSaveGameData>, I>>(
    object: I
  ): ChallengeStatSaveGameData {
    const message = createBaseChallengeStatSaveGameData();
    message.currentStatValue = object.currentStatValue ?? 0;
    message.challengeStatPath = object.challengeStatPath ?? "";
    return message;
  },
};

function createBaseOakChallengeRewardSaveGameData(): OakChallengeRewardSaveGameData {
  return { challengeRewardClaimed: false };
}

export const OakChallengeRewardSaveGameData = {
  encode(
    message: OakChallengeRewardSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.challengeRewardClaimed === true) {
      writer.uint32(8).bool(message.challengeRewardClaimed);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OakChallengeRewardSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOakChallengeRewardSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.challengeRewardClaimed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OakChallengeRewardSaveGameData {
    return {
      challengeRewardClaimed: isSet(object.challengeRewardClaimed)
        ? Boolean(object.challengeRewardClaimed)
        : false,
    };
  },

  toJSON(message: OakChallengeRewardSaveGameData): unknown {
    const obj: any = {};
    message.challengeRewardClaimed !== undefined &&
      (obj.challengeRewardClaimed = message.challengeRewardClaimed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OakChallengeRewardSaveGameData>, I>>(
    object: I
  ): OakChallengeRewardSaveGameData {
    const message = createBaseOakChallengeRewardSaveGameData();
    message.challengeRewardClaimed = object.challengeRewardClaimed ?? false;
    return message;
  },
};

function createBaseChallengeSaveGameData(): ChallengeSaveGameData {
  return {
    completedCount: 0,
    isActive: false,
    currentlyCompleted: false,
    completedProgressLevel: 0,
    progressCounter: 0,
    statInstanceState: [],
    challengeClassPath: "",
    challengeRewardInfo: [],
  };
}

export const ChallengeSaveGameData = {
  encode(
    message: ChallengeSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.completedCount !== 0) {
      writer.uint32(8).int32(message.completedCount);
    }
    if (message.isActive === true) {
      writer.uint32(16).bool(message.isActive);
    }
    if (message.currentlyCompleted === true) {
      writer.uint32(24).bool(message.currentlyCompleted);
    }
    if (message.completedProgressLevel !== 0) {
      writer.uint32(32).int32(message.completedProgressLevel);
    }
    if (message.progressCounter !== 0) {
      writer.uint32(40).int32(message.progressCounter);
    }
    for (const v of message.statInstanceState) {
      ChallengeStatSaveGameData.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.challengeClassPath !== "") {
      writer.uint32(58).string(message.challengeClassPath);
    }
    for (const v of message.challengeRewardInfo) {
      OakChallengeRewardSaveGameData.encode(
        v!,
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChallengeSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completedCount = reader.int32();
          break;
        case 2:
          message.isActive = reader.bool();
          break;
        case 3:
          message.currentlyCompleted = reader.bool();
          break;
        case 4:
          message.completedProgressLevel = reader.int32();
          break;
        case 5:
          message.progressCounter = reader.int32();
          break;
        case 6:
          message.statInstanceState.push(
            ChallengeStatSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.challengeClassPath = reader.string();
          break;
        case 8:
          message.challengeRewardInfo.push(
            OakChallengeRewardSaveGameData.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChallengeSaveGameData {
    return {
      completedCount: isSet(object.completedCount)
        ? Number(object.completedCount)
        : 0,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
      currentlyCompleted: isSet(object.currentlyCompleted)
        ? Boolean(object.currentlyCompleted)
        : false,
      completedProgressLevel: isSet(object.completedProgressLevel)
        ? Number(object.completedProgressLevel)
        : 0,
      progressCounter: isSet(object.progressCounter)
        ? Number(object.progressCounter)
        : 0,
      statInstanceState: Array.isArray(object?.statInstanceState)
        ? object.statInstanceState.map((e: any) =>
            ChallengeStatSaveGameData.fromJSON(e)
          )
        : [],
      challengeClassPath: isSet(object.challengeClassPath)
        ? String(object.challengeClassPath)
        : "",
      challengeRewardInfo: Array.isArray(object?.challengeRewardInfo)
        ? object.challengeRewardInfo.map((e: any) =>
            OakChallengeRewardSaveGameData.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: ChallengeSaveGameData): unknown {
    const obj: any = {};
    message.completedCount !== undefined &&
      (obj.completedCount = Math.round(message.completedCount));
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.currentlyCompleted !== undefined &&
      (obj.currentlyCompleted = message.currentlyCompleted);
    message.completedProgressLevel !== undefined &&
      (obj.completedProgressLevel = Math.round(message.completedProgressLevel));
    message.progressCounter !== undefined &&
      (obj.progressCounter = Math.round(message.progressCounter));
    if (message.statInstanceState) {
      obj.statInstanceState = message.statInstanceState.map((e) =>
        e ? ChallengeStatSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.statInstanceState = [];
    }
    message.challengeClassPath !== undefined &&
      (obj.challengeClassPath = message.challengeClassPath);
    if (message.challengeRewardInfo) {
      obj.challengeRewardInfo = message.challengeRewardInfo.map((e) =>
        e ? OakChallengeRewardSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.challengeRewardInfo = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChallengeSaveGameData>, I>>(
    object: I
  ): ChallengeSaveGameData {
    const message = createBaseChallengeSaveGameData();
    message.completedCount = object.completedCount ?? 0;
    message.isActive = object.isActive ?? false;
    message.currentlyCompleted = object.currentlyCompleted ?? false;
    message.completedProgressLevel = object.completedProgressLevel ?? 0;
    message.progressCounter = object.progressCounter ?? 0;
    message.statInstanceState =
      object.statInstanceState?.map((e) =>
        ChallengeStatSaveGameData.fromPartial(e)
      ) || [];
    message.challengeClassPath = object.challengeClassPath ?? "";
    message.challengeRewardInfo =
      object.challengeRewardInfo?.map((e) =>
        OakChallengeRewardSaveGameData.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseOakMailItem(): OakMailItem {
  return {
    mailItemType: 0,
    senderDisplayName: "",
    subject: "",
    body: "",
    gearSerialNumber: "",
    mailGuid: "",
    dateSent: 0,
    expirationDate: 0,
    fromPlayerId: "",
    hasBeenRead: false,
  };
}

export const OakMailItem = {
  encode(
    message: OakMailItem,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mailItemType !== 0) {
      writer.uint32(8).uint32(message.mailItemType);
    }
    if (message.senderDisplayName !== "") {
      writer.uint32(18).string(message.senderDisplayName);
    }
    if (message.subject !== "") {
      writer.uint32(26).string(message.subject);
    }
    if (message.body !== "") {
      writer.uint32(34).string(message.body);
    }
    if (message.gearSerialNumber !== "") {
      writer.uint32(42).string(message.gearSerialNumber);
    }
    if (message.mailGuid !== "") {
      writer.uint32(50).string(message.mailGuid);
    }
    if (message.dateSent !== 0) {
      writer.uint32(56).int64(message.dateSent);
    }
    if (message.expirationDate !== 0) {
      writer.uint32(64).int64(message.expirationDate);
    }
    if (message.fromPlayerId !== "") {
      writer.uint32(74).string(message.fromPlayerId);
    }
    if (message.hasBeenRead === true) {
      writer.uint32(80).bool(message.hasBeenRead);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OakMailItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOakMailItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mailItemType = reader.uint32();
          break;
        case 2:
          message.senderDisplayName = reader.string();
          break;
        case 3:
          message.subject = reader.string();
          break;
        case 4:
          message.body = reader.string();
          break;
        case 5:
          message.gearSerialNumber = reader.string();
          break;
        case 6:
          message.mailGuid = reader.string();
          break;
        case 7:
          message.dateSent = longToNumber(reader.int64() as Long);
          break;
        case 8:
          message.expirationDate = longToNumber(reader.int64() as Long);
          break;
        case 9:
          message.fromPlayerId = reader.string();
          break;
        case 10:
          message.hasBeenRead = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OakMailItem {
    return {
      mailItemType: isSet(object.mailItemType)
        ? Number(object.mailItemType)
        : 0,
      senderDisplayName: isSet(object.senderDisplayName)
        ? String(object.senderDisplayName)
        : "",
      subject: isSet(object.subject) ? String(object.subject) : "",
      body: isSet(object.body) ? String(object.body) : "",
      gearSerialNumber: isSet(object.gearSerialNumber)
        ? String(object.gearSerialNumber)
        : "",
      mailGuid: isSet(object.mailGuid) ? String(object.mailGuid) : "",
      dateSent: isSet(object.dateSent) ? Number(object.dateSent) : 0,
      expirationDate: isSet(object.expirationDate)
        ? Number(object.expirationDate)
        : 0,
      fromPlayerId: isSet(object.fromPlayerId)
        ? String(object.fromPlayerId)
        : "",
      hasBeenRead: isSet(object.hasBeenRead)
        ? Boolean(object.hasBeenRead)
        : false,
    };
  },

  toJSON(message: OakMailItem): unknown {
    const obj: any = {};
    message.mailItemType !== undefined &&
      (obj.mailItemType = Math.round(message.mailItemType));
    message.senderDisplayName !== undefined &&
      (obj.senderDisplayName = message.senderDisplayName);
    message.subject !== undefined && (obj.subject = message.subject);
    message.body !== undefined && (obj.body = message.body);
    message.gearSerialNumber !== undefined &&
      (obj.gearSerialNumber = message.gearSerialNumber);
    message.mailGuid !== undefined && (obj.mailGuid = message.mailGuid);
    message.dateSent !== undefined &&
      (obj.dateSent = Math.round(message.dateSent));
    message.expirationDate !== undefined &&
      (obj.expirationDate = Math.round(message.expirationDate));
    message.fromPlayerId !== undefined &&
      (obj.fromPlayerId = message.fromPlayerId);
    message.hasBeenRead !== undefined &&
      (obj.hasBeenRead = message.hasBeenRead);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OakMailItem>, I>>(
    object: I
  ): OakMailItem {
    const message = createBaseOakMailItem();
    message.mailItemType = object.mailItemType ?? 0;
    message.senderDisplayName = object.senderDisplayName ?? "";
    message.subject = object.subject ?? "";
    message.body = object.body ?? "";
    message.gearSerialNumber = object.gearSerialNumber ?? "";
    message.mailGuid = object.mailGuid ?? "";
    message.dateSent = object.dateSent ?? 0;
    message.expirationDate = object.expirationDate ?? 0;
    message.fromPlayerId = object.fromPlayerId ?? "";
    message.hasBeenRead = object.hasBeenRead ?? false;
    return message;
  },
};

function createBaseOakCustomizationSaveGameData(): OakCustomizationSaveGameData {
  return { isNew: false, customizationAssetPath: "" };
}

export const OakCustomizationSaveGameData = {
  encode(
    message: OakCustomizationSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isNew === true) {
      writer.uint32(8).bool(message.isNew);
    }
    if (message.customizationAssetPath !== "") {
      writer.uint32(18).string(message.customizationAssetPath);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OakCustomizationSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOakCustomizationSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isNew = reader.bool();
          break;
        case 2:
          message.customizationAssetPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OakCustomizationSaveGameData {
    return {
      isNew: isSet(object.isNew) ? Boolean(object.isNew) : false,
      customizationAssetPath: isSet(object.customizationAssetPath)
        ? String(object.customizationAssetPath)
        : "",
    };
  },

  toJSON(message: OakCustomizationSaveGameData): unknown {
    const obj: any = {};
    message.isNew !== undefined && (obj.isNew = message.isNew);
    message.customizationAssetPath !== undefined &&
      (obj.customizationAssetPath = message.customizationAssetPath);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OakCustomizationSaveGameData>, I>>(
    object: I
  ): OakCustomizationSaveGameData {
    const message = createBaseOakCustomizationSaveGameData();
    message.isNew = object.isNew ?? false;
    message.customizationAssetPath = object.customizationAssetPath ?? "";
    return message;
  },
};

function createBaseOakInventoryCustomizationPartInfo(): OakInventoryCustomizationPartInfo {
  return { customizationPartHash: 0, isNew: false };
}

export const OakInventoryCustomizationPartInfo = {
  encode(
    message: OakInventoryCustomizationPartInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.customizationPartHash !== 0) {
      writer.uint32(8).uint32(message.customizationPartHash);
    }
    if (message.isNew === true) {
      writer.uint32(16).bool(message.isNew);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OakInventoryCustomizationPartInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOakInventoryCustomizationPartInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customizationPartHash = reader.uint32();
          break;
        case 2:
          message.isNew = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OakInventoryCustomizationPartInfo {
    return {
      customizationPartHash: isSet(object.customizationPartHash)
        ? Number(object.customizationPartHash)
        : 0,
      isNew: isSet(object.isNew) ? Boolean(object.isNew) : false,
    };
  },

  toJSON(message: OakInventoryCustomizationPartInfo): unknown {
    const obj: any = {};
    message.customizationPartHash !== undefined &&
      (obj.customizationPartHash = Math.round(message.customizationPartHash));
    message.isNew !== undefined && (obj.isNew = message.isNew);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<OakInventoryCustomizationPartInfo>, I>
  >(object: I): OakInventoryCustomizationPartInfo {
    const message = createBaseOakInventoryCustomizationPartInfo();
    message.customizationPartHash = object.customizationPartHash ?? 0;
    message.isNew = object.isNew ?? false;
    return message;
  },
};

function createBaseOakProfileCustomizationLinkData(): OakProfileCustomizationLinkData {
  return { customizationName: "", active: false };
}

export const OakProfileCustomizationLinkData = {
  encode(
    message: OakProfileCustomizationLinkData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.customizationName !== "") {
      writer.uint32(10).string(message.customizationName);
    }
    if (message.active === true) {
      writer.uint32(16).bool(message.active);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OakProfileCustomizationLinkData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOakProfileCustomizationLinkData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.customizationName = reader.string();
          break;
        case 2:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OakProfileCustomizationLinkData {
    return {
      customizationName: isSet(object.customizationName)
        ? String(object.customizationName)
        : "",
      active: isSet(object.active) ? Boolean(object.active) : false,
    };
  },

  toJSON(message: OakProfileCustomizationLinkData): unknown {
    const obj: any = {};
    message.customizationName !== undefined &&
      (obj.customizationName = message.customizationName);
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OakProfileCustomizationLinkData>, I>>(
    object: I
  ): OakProfileCustomizationLinkData {
    const message = createBaseOakProfileCustomizationLinkData();
    message.customizationName = object.customizationName ?? "";
    message.active = object.active ?? false;
    return message;
  },
};

function createBaseInventoryBalanceStateInitializationData(): InventoryBalanceStateInitializationData {
  return {
    gameStage: 0,
    inventoryData: "",
    inventoryBalanceData: "",
    manufacturerData: "",
    partList: [],
    genericPartList: [],
    additionalData: new Uint8Array(),
    customizationPartList: [],
  };
}

export const InventoryBalanceStateInitializationData = {
  encode(
    message: InventoryBalanceStateInitializationData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.gameStage !== 0) {
      writer.uint32(8).int32(message.gameStage);
    }
    if (message.inventoryData !== "") {
      writer.uint32(18).string(message.inventoryData);
    }
    if (message.inventoryBalanceData !== "") {
      writer.uint32(26).string(message.inventoryBalanceData);
    }
    if (message.manufacturerData !== "") {
      writer.uint32(34).string(message.manufacturerData);
    }
    for (const v of message.partList) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.genericPartList) {
      writer.uint32(50).string(v!);
    }
    if (message.additionalData.length !== 0) {
      writer.uint32(58).bytes(message.additionalData);
    }
    for (const v of message.customizationPartList) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InventoryBalanceStateInitializationData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInventoryBalanceStateInitializationData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameStage = reader.int32();
          break;
        case 2:
          message.inventoryData = reader.string();
          break;
        case 3:
          message.inventoryBalanceData = reader.string();
          break;
        case 4:
          message.manufacturerData = reader.string();
          break;
        case 5:
          message.partList.push(reader.string());
          break;
        case 6:
          message.genericPartList.push(reader.string());
          break;
        case 7:
          message.additionalData = reader.bytes();
          break;
        case 8:
          message.customizationPartList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InventoryBalanceStateInitializationData {
    return {
      gameStage: isSet(object.gameStage) ? Number(object.gameStage) : 0,
      inventoryData: isSet(object.inventoryData)
        ? String(object.inventoryData)
        : "",
      inventoryBalanceData: isSet(object.inventoryBalanceData)
        ? String(object.inventoryBalanceData)
        : "",
      manufacturerData: isSet(object.manufacturerData)
        ? String(object.manufacturerData)
        : "",
      partList: Array.isArray(object?.partList)
        ? object.partList.map((e: any) => String(e))
        : [],
      genericPartList: Array.isArray(object?.genericPartList)
        ? object.genericPartList.map((e: any) => String(e))
        : [],
      additionalData: isSet(object.additionalData)
        ? bytesFromBase64(object.additionalData)
        : new Uint8Array(),
      customizationPartList: Array.isArray(object?.customizationPartList)
        ? object.customizationPartList.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: InventoryBalanceStateInitializationData): unknown {
    const obj: any = {};
    message.gameStage !== undefined &&
      (obj.gameStage = Math.round(message.gameStage));
    message.inventoryData !== undefined &&
      (obj.inventoryData = message.inventoryData);
    message.inventoryBalanceData !== undefined &&
      (obj.inventoryBalanceData = message.inventoryBalanceData);
    message.manufacturerData !== undefined &&
      (obj.manufacturerData = message.manufacturerData);
    if (message.partList) {
      obj.partList = message.partList.map((e) => e);
    } else {
      obj.partList = [];
    }
    if (message.genericPartList) {
      obj.genericPartList = message.genericPartList.map((e) => e);
    } else {
      obj.genericPartList = [];
    }
    message.additionalData !== undefined &&
      (obj.additionalData = base64FromBytes(
        message.additionalData !== undefined
          ? message.additionalData
          : new Uint8Array()
      ));
    if (message.customizationPartList) {
      obj.customizationPartList = message.customizationPartList.map((e) => e);
    } else {
      obj.customizationPartList = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<InventoryBalanceStateInitializationData>, I>
  >(object: I): InventoryBalanceStateInitializationData {
    const message = createBaseInventoryBalanceStateInitializationData();
    message.gameStage = object.gameStage ?? 0;
    message.inventoryData = object.inventoryData ?? "";
    message.inventoryBalanceData = object.inventoryBalanceData ?? "";
    message.manufacturerData = object.manufacturerData ?? "";
    message.partList = object.partList?.map((e) => e) || [];
    message.genericPartList = object.genericPartList?.map((e) => e) || [];
    message.additionalData = object.additionalData ?? new Uint8Array();
    message.customizationPartList =
      object.customizationPartList?.map((e) => e) || [];
    return message;
  },
};

function createBaseOakInventoryItemSaveGameData(): OakInventoryItemSaveGameData {
  return {
    itemSerialNumber: new Uint8Array(),
    pickupOrderIndex: 0,
    flags: 0,
    developmentSaveData: undefined,
  };
}

export const OakInventoryItemSaveGameData = {
  encode(
    message: OakInventoryItemSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.itemSerialNumber.length !== 0) {
      writer.uint32(10).bytes(message.itemSerialNumber);
    }
    if (message.pickupOrderIndex !== 0) {
      writer.uint32(16).int32(message.pickupOrderIndex);
    }
    if (message.flags !== 0) {
      writer.uint32(24).int32(message.flags);
    }
    if (message.developmentSaveData !== undefined) {
      InventoryBalanceStateInitializationData.encode(
        message.developmentSaveData,
        writer.uint32(42).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OakInventoryItemSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOakInventoryItemSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.itemSerialNumber = reader.bytes();
          break;
        case 2:
          message.pickupOrderIndex = reader.int32();
          break;
        case 3:
          message.flags = reader.int32();
          break;
        case 5:
          message.developmentSaveData =
            InventoryBalanceStateInitializationData.decode(
              reader,
              reader.uint32()
            );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OakInventoryItemSaveGameData {
    return {
      itemSerialNumber: isSet(object.itemSerialNumber)
        ? bytesFromBase64(object.itemSerialNumber)
        : new Uint8Array(),
      pickupOrderIndex: isSet(object.pickupOrderIndex)
        ? Number(object.pickupOrderIndex)
        : 0,
      flags: isSet(object.flags) ? Number(object.flags) : 0,
      developmentSaveData: isSet(object.developmentSaveData)
        ? InventoryBalanceStateInitializationData.fromJSON(
            object.developmentSaveData
          )
        : undefined,
    };
  },

  toJSON(message: OakInventoryItemSaveGameData): unknown {
    const obj: any = {};
    message.itemSerialNumber !== undefined &&
      (obj.itemSerialNumber = base64FromBytes(
        message.itemSerialNumber !== undefined
          ? message.itemSerialNumber
          : new Uint8Array()
      ));
    message.pickupOrderIndex !== undefined &&
      (obj.pickupOrderIndex = Math.round(message.pickupOrderIndex));
    message.flags !== undefined && (obj.flags = Math.round(message.flags));
    message.developmentSaveData !== undefined &&
      (obj.developmentSaveData = message.developmentSaveData
        ? InventoryBalanceStateInitializationData.toJSON(
            message.developmentSaveData
          )
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OakInventoryItemSaveGameData>, I>>(
    object: I
  ): OakInventoryItemSaveGameData {
    const message = createBaseOakInventoryItemSaveGameData();
    message.itemSerialNumber = object.itemSerialNumber ?? new Uint8Array();
    message.pickupOrderIndex = object.pickupOrderIndex ?? 0;
    message.flags = object.flags ?? 0;
    message.developmentSaveData =
      object.developmentSaveData !== undefined &&
      object.developmentSaveData !== null
        ? InventoryBalanceStateInitializationData.fromPartial(
            object.developmentSaveData
          )
        : undefined;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
