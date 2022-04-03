/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  Vec3,
  ChallengeSaveGameData,
  GameStatSaveGameData,
  InventoryCategorySaveData,
  OakMailItem,
  OakSDUSaveGameData,
  OakCustomizationSaveGameData,
  OakInventoryCustomizationPartInfo,
  RegisteredDownloadableEntitlements,
  OakInventoryItemSaveGameData,
} from "./OakShared";

export const protobufPackage = "OakSave";

export interface PlayerInputBindingButton {
  rebindName: string;
  keyNames: string[];
}

export interface PlayerInputBindingAxisKey {
  keyName: string;
  scale3d: Vec3 | undefined;
}

export interface PlayerInputBindingAxis {
  rebindName: string;
  keys: PlayerInputBindingAxisKey[];
}

export interface PlayerInputBindingSchema {
  schemaName: string;
  buttonBindings: PlayerInputBindingButton[];
  axisBindings: PlayerInputBindingAxis[];
}

export interface PlayerInputBindings {
  schemas: PlayerInputBindingSchema[];
}

export interface OakProfileLastInventoryFilterInfo {
  slotTypeId: string;
  lastFilterIndex: number;
}

export interface OakProfileMenuTutorialInfo {
  seenTutorials: string[];
  tutorialsDisabled: boolean;
  tutorialsAllowedInNonGameModes: boolean;
}

export interface OakFriendEncounterData {
  numEncounters: number;
  timeLastEncounter: number;
}

export interface GearSoldByFriendData {
  gearSerialNumber: string;
  playerClassIdentifierHash: number;
  friendNetId: string;
}

export interface PlayerPrestigeProfileData {
  prestigeExperience: number;
  lastUpgradeTreeIndex: number;
  pointsSpentByIndexOrder: number[];
  hasSeenTutorial: boolean;
}

export interface RecentlyMetPlayer {
  shiftPlayerId: string;
  firstPartyPlayerId: string;
  showShiftPlayerEntry: boolean;
}

export interface AcceptedOfflineEULA {
  id: number;
  version: string;
}

export interface Profile {
  enableAimAssist: boolean;
  gamepadInvertLook: boolean;
  gamepadInvertTurn: boolean;
  gamepadInvertMove: boolean;
  gamepadInvertStrafe: boolean;
  enableVibration: boolean;
  invertMousePitch: boolean;
  enableMouseSmoothing: boolean;
  mouseScale: number;
  showDamageNumbers: boolean;
  showDamageNumberIcons: boolean;
  enableTrainingMessages: boolean;
  showTextChat: boolean;
  centerCrosshair: boolean;
  toggleSprint: boolean;
  toggleCrouch: boolean;
  censorContent: boolean;
  musicVolume: number;
  soundEffectsVolume: number;
  voVolume: number;
  voiceVolume: number;
  enableOptionalVo: boolean;
  pushToTalk: boolean;
  enableControllerAudio: boolean;
  speakerAngleFront: number;
  speakerAngleSide: number;
  speakerAngleBack: number;
  speakerSetup: number;
  muteAudioOnFocusLoss: boolean;
  challengeData: ChallengeSaveGameData[];
  defaultDeadZoneInnerUpdated: boolean;
  disableEventContent: boolean;
  hideStrictNatHelpDialog: boolean;
  playerInputBindings: PlayerInputBindings | undefined;
  newsHashes: number[];
  lastUsedSavegameId: number;
  gamepadHipSensitivityLevel: number;
  gamepadZoomedSensitivityLevel: number;
  gamepadVehicleSensitivityLevel: number;
  gamepadMovementDeadZoneX: number;
  gamepadMovementDeadZoneY: number;
  gamepadLookDeadZoneInnerX: number;
  gamepadLookDeadZoneOuterX: number;
  gamepadLookDeadZoneInnerY: number;
  gamepadLookDeadZoneOuterY: number;
  gamepadVehicleMovementDeadZoneX: number;
  gamepadVehicleMovementDeadZoneY: number;
  gamepadVehicleLookDeadZoneInnerX: number;
  gamepadVehicleLookDeadZoneOuterX: number;
  gamepadVehicleLookDeadZoneInnerY: number;
  gamepadVehicleLookDeadZoneOuterY: number;
  gamepadLeftDeadZoneInner: number;
  gamepadLeftDeadZoneOuter: number;
  gamepadRightDeadZoneInner: number;
  gamepadRightDeadZoneOuter: number;
  gamepadLookAxialDeadZoneScale: number;
  gamepadMoveAxialDeadZoneScale: number;
  gamepadUseAdvancedHipAimSettings: boolean;
  gamepadUseAdvancedZoomedAimSettings: boolean;
  gamepadUseAdvancedVehicleAimSettings: boolean;
  gamepadHipYawRate: number;
  gamepadHipPitchRate: number;
  gamepadHipExtraYaw: number;
  gamepadHipExtraPitch: number;
  gamepadHipRampUpTime: number;
  gamepadHipRampUpDelay: number;
  gamepadZoomedYawRate: number;
  gamepadZoomedPitchRate: number;
  gamepadZoomedExtraYaw: number;
  gamepadZoomedExtraPitch: number;
  gamepadZoomedRampUpTime: number;
  gamepadZoomedRampUpDelay: number;
  gamepadVehicleYawRate: number;
  gamepadVehiclePitchRate: number;
  gamepadVehicleExtraYaw: number;
  gamepadVehicleExtraPitch: number;
  gamepadVehicleRampUpTime: number;
  gamepadVehicleRampUpDelay: number;
  ironsightAimAssist: boolean;
  walkingJoystickScheme: number;
  drivingJoystickScheme: number;
  mouseAdsScale: number;
  mouseVehicleScale: number;
  mouseIronsightAimAssist: boolean;
  vehicleInputMode: number;
  weaponAimToggle: boolean;
  mantleRequiresButton: boolean;
  fixedMinimapRotation: boolean;
  mapInvertPitch: boolean;
  mapInvertYaw: boolean;
  difficulty: number;
  swapDualWieldControls: boolean;
  baseFov: number;
  crosshairNeutralColorFrame: number;
  crosshairEnemyColorFrame: number;
  crosshairAllyColorFrame: number;
  enableSubtitles: boolean;
  enableClosedCaptions: boolean;
  lastStatusMenuPage: string;
  inventoryScreenLastFilter: OakProfileLastInventoryFilterInfo[];
  tutorialInfo: OakProfileMenuTutorialInfo | undefined;
  defaultNetworkType: number;
  defaultInviteType: number;
  matchmakingRegion: string;
  streamingService: number;
  maxCachedFriendEvents: number;
  maxCachedFriendStatuses: number;
  friendEvents: string[];
  friendStatuses: string[];
  lastWhisperFetchEventsTime: number;
  lastWhisperFetchStatusesTime: number;
  friendEncounters: Profile_FriendEncountersEntry[];
  maxFriendEncounterSize: number;
  profileStatsData: GameStatSaveGameData[];
  bankInventoryCategoryList: InventoryCategorySaveData[];
  twoPlayerSplitscreenLayout: number;
  lostLootInventoryList: Uint8Array[];
  npcMailItems: OakMailItem[];
  mailGuids: string[];
  unreadMailGuids: string[];
  gearSoldByFriends: GearSoldByFriendData[];
  profileSduList: OakSDUSaveGameData[];
  unlockedCustomizations: OakCustomizationSaveGameData[];
  unlockedInventoryCustomizationParts: OakInventoryCustomizationPartInfo[];
  fixedInitialZonemapRotation: boolean;
  enableMouseAcceleration: boolean;
  enableGamepadInput: boolean;
  useClassicGamepadInput: boolean;
  masterVolume: number;
  monitorDisplayType: number;
  graphicsMode: number;
  frameRateLimit: number;
  baseVehicleFov: number;
  graphicsQuality: number;
  anisotropicFiltering: number;
  shadowQuality: number;
  displayPerformanceStats: number;
  textureDetail: number;
  drawDistance: number;
  clutter: number;
  tessellation: number;
  foliage: number;
  foliageShadows: boolean;
  planarReflections: boolean;
  volumetricFog: number;
  screenSpaceReflections: number;
  characterTextureDetail: number;
  characterDetail: number;
  ambientOcclusionQuality: number;
  objectMotionBlur: boolean;
  lensFlare: boolean;
  combatNumberLongFormat: boolean;
  showMinimapLegendaries: boolean;
  usePlayerCallouts: boolean;
  friendEventNotificationLifetime: number;
  friendEventNotificationFrequency: number;
  tradeRequestReceptionType: number;
  headBobScale: number;
  hasResetConsoleFov: boolean;
  hasSeenFirstBoot: boolean;
  badassEventEnabled: boolean;
  pinataEventEnabled: boolean;
  minTimeBetweenBadassEvents: number;
  disableSpatialAudio: boolean;
  subsCcSize: number;
  ccSubsBackgroundOpacity: number;
  walkingButtonScheme: number;
  drivingButtonScheme: number;
  glyphMode: number;
  useMPH: boolean;
  registeredDownloadableEntitlements: RegisteredDownloadableEntitlements[];
  seenNewsItems: string[];
  autoCenteringEnabled: boolean;
  increasedChanceForSubscribers: boolean;
  rareChestEventEnabled: boolean;
  hudScaleMultiplier: number;
  totalPlaytimeSeconds: number;
  desiredCrossplayState: number;
  desiredFriendSyncState: number;
  needsShiftFirstBoot: boolean;
  recentlyMetPlayers: RecentlyMetPlayer[];
  enableTriggerFeedback: boolean;
  cameraShakeScale: number;
  playerPrestige: PlayerPrestigeProfileData | undefined;
  needsShiftFirstBootPrimary: boolean;
  acceptedOfflineEulas: AcceptedOfflineEULA[];
  overrideAudioLanguage: string;
  bankInventoryList: OakInventoryItemSaveGameData[];
}

export interface Profile_FriendEncountersEntry {
  key: string;
  value: OakFriendEncounterData | undefined;
}

function createBasePlayerInputBindingButton(): PlayerInputBindingButton {
  return { rebindName: "", keyNames: [] };
}

export const PlayerInputBindingButton = {
  encode(
    message: PlayerInputBindingButton,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rebindName !== "") {
      writer.uint32(10).string(message.rebindName);
    }
    for (const v of message.keyNames) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlayerInputBindingButton {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerInputBindingButton();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rebindName = reader.string();
          break;
        case 2:
          message.keyNames.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlayerInputBindingButton {
    return {
      rebindName: isSet(object.rebindName) ? String(object.rebindName) : "",
      keyNames: Array.isArray(object?.keyNames)
        ? object.keyNames.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: PlayerInputBindingButton): unknown {
    const obj: any = {};
    message.rebindName !== undefined && (obj.rebindName = message.rebindName);
    if (message.keyNames) {
      obj.keyNames = message.keyNames.map((e) => e);
    } else {
      obj.keyNames = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlayerInputBindingButton>, I>>(
    object: I
  ): PlayerInputBindingButton {
    const message = createBasePlayerInputBindingButton();
    message.rebindName = object.rebindName ?? "";
    message.keyNames = object.keyNames?.map((e) => e) || [];
    return message;
  },
};

function createBasePlayerInputBindingAxisKey(): PlayerInputBindingAxisKey {
  return { keyName: "", scale3d: undefined };
}

export const PlayerInputBindingAxisKey = {
  encode(
    message: PlayerInputBindingAxisKey,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.keyName !== "") {
      writer.uint32(10).string(message.keyName);
    }
    if (message.scale3d !== undefined) {
      Vec3.encode(message.scale3d, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlayerInputBindingAxisKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerInputBindingAxisKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyName = reader.string();
          break;
        case 2:
          message.scale3d = Vec3.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlayerInputBindingAxisKey {
    return {
      keyName: isSet(object.keyName) ? String(object.keyName) : "",
      scale3d: isSet(object.scale3d)
        ? Vec3.fromJSON(object.scale3d)
        : undefined,
    };
  },

  toJSON(message: PlayerInputBindingAxisKey): unknown {
    const obj: any = {};
    message.keyName !== undefined && (obj.keyName = message.keyName);
    message.scale3d !== undefined &&
      (obj.scale3d = message.scale3d
        ? Vec3.toJSON(message.scale3d)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlayerInputBindingAxisKey>, I>>(
    object: I
  ): PlayerInputBindingAxisKey {
    const message = createBasePlayerInputBindingAxisKey();
    message.keyName = object.keyName ?? "";
    message.scale3d =
      object.scale3d !== undefined && object.scale3d !== null
        ? Vec3.fromPartial(object.scale3d)
        : undefined;
    return message;
  },
};

function createBasePlayerInputBindingAxis(): PlayerInputBindingAxis {
  return { rebindName: "", keys: [] };
}

export const PlayerInputBindingAxis = {
  encode(
    message: PlayerInputBindingAxis,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rebindName !== "") {
      writer.uint32(10).string(message.rebindName);
    }
    for (const v of message.keys) {
      PlayerInputBindingAxisKey.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlayerInputBindingAxis {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerInputBindingAxis();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rebindName = reader.string();
          break;
        case 2:
          message.keys.push(
            PlayerInputBindingAxisKey.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlayerInputBindingAxis {
    return {
      rebindName: isSet(object.rebindName) ? String(object.rebindName) : "",
      keys: Array.isArray(object?.keys)
        ? object.keys.map((e: any) => PlayerInputBindingAxisKey.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PlayerInputBindingAxis): unknown {
    const obj: any = {};
    message.rebindName !== undefined && (obj.rebindName = message.rebindName);
    if (message.keys) {
      obj.keys = message.keys.map((e) =>
        e ? PlayerInputBindingAxisKey.toJSON(e) : undefined
      );
    } else {
      obj.keys = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlayerInputBindingAxis>, I>>(
    object: I
  ): PlayerInputBindingAxis {
    const message = createBasePlayerInputBindingAxis();
    message.rebindName = object.rebindName ?? "";
    message.keys =
      object.keys?.map((e) => PlayerInputBindingAxisKey.fromPartial(e)) || [];
    return message;
  },
};

function createBasePlayerInputBindingSchema(): PlayerInputBindingSchema {
  return { schemaName: "", buttonBindings: [], axisBindings: [] };
}

export const PlayerInputBindingSchema = {
  encode(
    message: PlayerInputBindingSchema,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.schemaName !== "") {
      writer.uint32(10).string(message.schemaName);
    }
    for (const v of message.buttonBindings) {
      PlayerInputBindingButton.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.axisBindings) {
      PlayerInputBindingAxis.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlayerInputBindingSchema {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerInputBindingSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemaName = reader.string();
          break;
        case 2:
          message.buttonBindings.push(
            PlayerInputBindingButton.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.axisBindings.push(
            PlayerInputBindingAxis.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlayerInputBindingSchema {
    return {
      schemaName: isSet(object.schemaName) ? String(object.schemaName) : "",
      buttonBindings: Array.isArray(object?.buttonBindings)
        ? object.buttonBindings.map((e: any) =>
            PlayerInputBindingButton.fromJSON(e)
          )
        : [],
      axisBindings: Array.isArray(object?.axisBindings)
        ? object.axisBindings.map((e: any) =>
            PlayerInputBindingAxis.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: PlayerInputBindingSchema): unknown {
    const obj: any = {};
    message.schemaName !== undefined && (obj.schemaName = message.schemaName);
    if (message.buttonBindings) {
      obj.buttonBindings = message.buttonBindings.map((e) =>
        e ? PlayerInputBindingButton.toJSON(e) : undefined
      );
    } else {
      obj.buttonBindings = [];
    }
    if (message.axisBindings) {
      obj.axisBindings = message.axisBindings.map((e) =>
        e ? PlayerInputBindingAxis.toJSON(e) : undefined
      );
    } else {
      obj.axisBindings = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlayerInputBindingSchema>, I>>(
    object: I
  ): PlayerInputBindingSchema {
    const message = createBasePlayerInputBindingSchema();
    message.schemaName = object.schemaName ?? "";
    message.buttonBindings =
      object.buttonBindings?.map((e) =>
        PlayerInputBindingButton.fromPartial(e)
      ) || [];
    message.axisBindings =
      object.axisBindings?.map((e) => PlayerInputBindingAxis.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBasePlayerInputBindings(): PlayerInputBindings {
  return { schemas: [] };
}

export const PlayerInputBindings = {
  encode(
    message: PlayerInputBindings,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.schemas) {
      PlayerInputBindingSchema.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerInputBindings {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerInputBindings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.schemas.push(
            PlayerInputBindingSchema.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlayerInputBindings {
    return {
      schemas: Array.isArray(object?.schemas)
        ? object.schemas.map((e: any) => PlayerInputBindingSchema.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PlayerInputBindings): unknown {
    const obj: any = {};
    if (message.schemas) {
      obj.schemas = message.schemas.map((e) =>
        e ? PlayerInputBindingSchema.toJSON(e) : undefined
      );
    } else {
      obj.schemas = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlayerInputBindings>, I>>(
    object: I
  ): PlayerInputBindings {
    const message = createBasePlayerInputBindings();
    message.schemas =
      object.schemas?.map((e) => PlayerInputBindingSchema.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOakProfileLastInventoryFilterInfo(): OakProfileLastInventoryFilterInfo {
  return { slotTypeId: "", lastFilterIndex: 0 };
}

export const OakProfileLastInventoryFilterInfo = {
  encode(
    message: OakProfileLastInventoryFilterInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.slotTypeId !== "") {
      writer.uint32(10).string(message.slotTypeId);
    }
    if (message.lastFilterIndex !== 0) {
      writer.uint32(16).int32(message.lastFilterIndex);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OakProfileLastInventoryFilterInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOakProfileLastInventoryFilterInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slotTypeId = reader.string();
          break;
        case 2:
          message.lastFilterIndex = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OakProfileLastInventoryFilterInfo {
    return {
      slotTypeId: isSet(object.slotTypeId) ? String(object.slotTypeId) : "",
      lastFilterIndex: isSet(object.lastFilterIndex)
        ? Number(object.lastFilterIndex)
        : 0,
    };
  },

  toJSON(message: OakProfileLastInventoryFilterInfo): unknown {
    const obj: any = {};
    message.slotTypeId !== undefined && (obj.slotTypeId = message.slotTypeId);
    message.lastFilterIndex !== undefined &&
      (obj.lastFilterIndex = Math.round(message.lastFilterIndex));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<OakProfileLastInventoryFilterInfo>, I>
  >(object: I): OakProfileLastInventoryFilterInfo {
    const message = createBaseOakProfileLastInventoryFilterInfo();
    message.slotTypeId = object.slotTypeId ?? "";
    message.lastFilterIndex = object.lastFilterIndex ?? 0;
    return message;
  },
};

function createBaseOakProfileMenuTutorialInfo(): OakProfileMenuTutorialInfo {
  return {
    seenTutorials: [],
    tutorialsDisabled: false,
    tutorialsAllowedInNonGameModes: false,
  };
}

export const OakProfileMenuTutorialInfo = {
  encode(
    message: OakProfileMenuTutorialInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.seenTutorials) {
      writer.uint32(10).string(v!);
    }
    if (message.tutorialsDisabled === true) {
      writer.uint32(16).bool(message.tutorialsDisabled);
    }
    if (message.tutorialsAllowedInNonGameModes === true) {
      writer.uint32(24).bool(message.tutorialsAllowedInNonGameModes);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OakProfileMenuTutorialInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOakProfileMenuTutorialInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seenTutorials.push(reader.string());
          break;
        case 2:
          message.tutorialsDisabled = reader.bool();
          break;
        case 3:
          message.tutorialsAllowedInNonGameModes = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OakProfileMenuTutorialInfo {
    return {
      seenTutorials: Array.isArray(object?.seenTutorials)
        ? object.seenTutorials.map((e: any) => String(e))
        : [],
      tutorialsDisabled: isSet(object.tutorialsDisabled)
        ? Boolean(object.tutorialsDisabled)
        : false,
      tutorialsAllowedInNonGameModes: isSet(
        object.tutorialsAllowedInNonGameModes
      )
        ? Boolean(object.tutorialsAllowedInNonGameModes)
        : false,
    };
  },

  toJSON(message: OakProfileMenuTutorialInfo): unknown {
    const obj: any = {};
    if (message.seenTutorials) {
      obj.seenTutorials = message.seenTutorials.map((e) => e);
    } else {
      obj.seenTutorials = [];
    }
    message.tutorialsDisabled !== undefined &&
      (obj.tutorialsDisabled = message.tutorialsDisabled);
    message.tutorialsAllowedInNonGameModes !== undefined &&
      (obj.tutorialsAllowedInNonGameModes =
        message.tutorialsAllowedInNonGameModes);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OakProfileMenuTutorialInfo>, I>>(
    object: I
  ): OakProfileMenuTutorialInfo {
    const message = createBaseOakProfileMenuTutorialInfo();
    message.seenTutorials = object.seenTutorials?.map((e) => e) || [];
    message.tutorialsDisabled = object.tutorialsDisabled ?? false;
    message.tutorialsAllowedInNonGameModes =
      object.tutorialsAllowedInNonGameModes ?? false;
    return message;
  },
};

function createBaseOakFriendEncounterData(): OakFriendEncounterData {
  return { numEncounters: 0, timeLastEncounter: 0 };
}

export const OakFriendEncounterData = {
  encode(
    message: OakFriendEncounterData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.numEncounters !== 0) {
      writer.uint32(8).uint32(message.numEncounters);
    }
    if (message.timeLastEncounter !== 0) {
      writer.uint32(16).int64(message.timeLastEncounter);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OakFriendEncounterData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOakFriendEncounterData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numEncounters = reader.uint32();
          break;
        case 2:
          message.timeLastEncounter = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OakFriendEncounterData {
    return {
      numEncounters: isSet(object.numEncounters)
        ? Number(object.numEncounters)
        : 0,
      timeLastEncounter: isSet(object.timeLastEncounter)
        ? Number(object.timeLastEncounter)
        : 0,
    };
  },

  toJSON(message: OakFriendEncounterData): unknown {
    const obj: any = {};
    message.numEncounters !== undefined &&
      (obj.numEncounters = Math.round(message.numEncounters));
    message.timeLastEncounter !== undefined &&
      (obj.timeLastEncounter = Math.round(message.timeLastEncounter));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OakFriendEncounterData>, I>>(
    object: I
  ): OakFriendEncounterData {
    const message = createBaseOakFriendEncounterData();
    message.numEncounters = object.numEncounters ?? 0;
    message.timeLastEncounter = object.timeLastEncounter ?? 0;
    return message;
  },
};

function createBaseGearSoldByFriendData(): GearSoldByFriendData {
  return {
    gearSerialNumber: "",
    playerClassIdentifierHash: 0,
    friendNetId: "",
  };
}

export const GearSoldByFriendData = {
  encode(
    message: GearSoldByFriendData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.gearSerialNumber !== "") {
      writer.uint32(10).string(message.gearSerialNumber);
    }
    if (message.playerClassIdentifierHash !== 0) {
      writer.uint32(16).int32(message.playerClassIdentifierHash);
    }
    if (message.friendNetId !== "") {
      writer.uint32(26).string(message.friendNetId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GearSoldByFriendData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGearSoldByFriendData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gearSerialNumber = reader.string();
          break;
        case 2:
          message.playerClassIdentifierHash = reader.int32();
          break;
        case 3:
          message.friendNetId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GearSoldByFriendData {
    return {
      gearSerialNumber: isSet(object.gearSerialNumber)
        ? String(object.gearSerialNumber)
        : "",
      playerClassIdentifierHash: isSet(object.playerClassIdentifierHash)
        ? Number(object.playerClassIdentifierHash)
        : 0,
      friendNetId: isSet(object.friendNetId) ? String(object.friendNetId) : "",
    };
  },

  toJSON(message: GearSoldByFriendData): unknown {
    const obj: any = {};
    message.gearSerialNumber !== undefined &&
      (obj.gearSerialNumber = message.gearSerialNumber);
    message.playerClassIdentifierHash !== undefined &&
      (obj.playerClassIdentifierHash = Math.round(
        message.playerClassIdentifierHash
      ));
    message.friendNetId !== undefined &&
      (obj.friendNetId = message.friendNetId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GearSoldByFriendData>, I>>(
    object: I
  ): GearSoldByFriendData {
    const message = createBaseGearSoldByFriendData();
    message.gearSerialNumber = object.gearSerialNumber ?? "";
    message.playerClassIdentifierHash = object.playerClassIdentifierHash ?? 0;
    message.friendNetId = object.friendNetId ?? "";
    return message;
  },
};

function createBasePlayerPrestigeProfileData(): PlayerPrestigeProfileData {
  return {
    prestigeExperience: 0,
    lastUpgradeTreeIndex: 0,
    pointsSpentByIndexOrder: [],
    hasSeenTutorial: false,
  };
}

export const PlayerPrestigeProfileData = {
  encode(
    message: PlayerPrestigeProfileData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.prestigeExperience !== 0) {
      writer.uint32(8).int64(message.prestigeExperience);
    }
    if (message.lastUpgradeTreeIndex !== 0) {
      writer.uint32(16).int32(message.lastUpgradeTreeIndex);
    }
    writer.uint32(26).fork();
    for (const v of message.pointsSpentByIndexOrder) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.hasSeenTutorial === true) {
      writer.uint32(32).bool(message.hasSeenTutorial);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlayerPrestigeProfileData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerPrestigeProfileData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prestigeExperience = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.lastUpgradeTreeIndex = reader.int32();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.pointsSpentByIndexOrder.push(reader.int32());
            }
          } else {
            message.pointsSpentByIndexOrder.push(reader.int32());
          }
          break;
        case 4:
          message.hasSeenTutorial = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlayerPrestigeProfileData {
    return {
      prestigeExperience: isSet(object.prestigeExperience)
        ? Number(object.prestigeExperience)
        : 0,
      lastUpgradeTreeIndex: isSet(object.lastUpgradeTreeIndex)
        ? Number(object.lastUpgradeTreeIndex)
        : 0,
      pointsSpentByIndexOrder: Array.isArray(object?.pointsSpentByIndexOrder)
        ? object.pointsSpentByIndexOrder.map((e: any) => Number(e))
        : [],
      hasSeenTutorial: isSet(object.hasSeenTutorial)
        ? Boolean(object.hasSeenTutorial)
        : false,
    };
  },

  toJSON(message: PlayerPrestigeProfileData): unknown {
    const obj: any = {};
    message.prestigeExperience !== undefined &&
      (obj.prestigeExperience = Math.round(message.prestigeExperience));
    message.lastUpgradeTreeIndex !== undefined &&
      (obj.lastUpgradeTreeIndex = Math.round(message.lastUpgradeTreeIndex));
    if (message.pointsSpentByIndexOrder) {
      obj.pointsSpentByIndexOrder = message.pointsSpentByIndexOrder.map((e) =>
        Math.round(e)
      );
    } else {
      obj.pointsSpentByIndexOrder = [];
    }
    message.hasSeenTutorial !== undefined &&
      (obj.hasSeenTutorial = message.hasSeenTutorial);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlayerPrestigeProfileData>, I>>(
    object: I
  ): PlayerPrestigeProfileData {
    const message = createBasePlayerPrestigeProfileData();
    message.prestigeExperience = object.prestigeExperience ?? 0;
    message.lastUpgradeTreeIndex = object.lastUpgradeTreeIndex ?? 0;
    message.pointsSpentByIndexOrder =
      object.pointsSpentByIndexOrder?.map((e) => e) || [];
    message.hasSeenTutorial = object.hasSeenTutorial ?? false;
    return message;
  },
};

function createBaseRecentlyMetPlayer(): RecentlyMetPlayer {
  return {
    shiftPlayerId: "",
    firstPartyPlayerId: "",
    showShiftPlayerEntry: false,
  };
}

export const RecentlyMetPlayer = {
  encode(
    message: RecentlyMetPlayer,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.shiftPlayerId !== "") {
      writer.uint32(10).string(message.shiftPlayerId);
    }
    if (message.firstPartyPlayerId !== "") {
      writer.uint32(18).string(message.firstPartyPlayerId);
    }
    if (message.showShiftPlayerEntry === true) {
      writer.uint32(24).bool(message.showShiftPlayerEntry);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RecentlyMetPlayer {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecentlyMetPlayer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.shiftPlayerId = reader.string();
          break;
        case 2:
          message.firstPartyPlayerId = reader.string();
          break;
        case 3:
          message.showShiftPlayerEntry = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RecentlyMetPlayer {
    return {
      shiftPlayerId: isSet(object.shiftPlayerId)
        ? String(object.shiftPlayerId)
        : "",
      firstPartyPlayerId: isSet(object.firstPartyPlayerId)
        ? String(object.firstPartyPlayerId)
        : "",
      showShiftPlayerEntry: isSet(object.showShiftPlayerEntry)
        ? Boolean(object.showShiftPlayerEntry)
        : false,
    };
  },

  toJSON(message: RecentlyMetPlayer): unknown {
    const obj: any = {};
    message.shiftPlayerId !== undefined &&
      (obj.shiftPlayerId = message.shiftPlayerId);
    message.firstPartyPlayerId !== undefined &&
      (obj.firstPartyPlayerId = message.firstPartyPlayerId);
    message.showShiftPlayerEntry !== undefined &&
      (obj.showShiftPlayerEntry = message.showShiftPlayerEntry);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RecentlyMetPlayer>, I>>(
    object: I
  ): RecentlyMetPlayer {
    const message = createBaseRecentlyMetPlayer();
    message.shiftPlayerId = object.shiftPlayerId ?? "";
    message.firstPartyPlayerId = object.firstPartyPlayerId ?? "";
    message.showShiftPlayerEntry = object.showShiftPlayerEntry ?? false;
    return message;
  },
};

function createBaseAcceptedOfflineEULA(): AcceptedOfflineEULA {
  return { id: 0, version: "" };
}

export const AcceptedOfflineEULA = {
  encode(
    message: AcceptedOfflineEULA,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).int32(message.id);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AcceptedOfflineEULA {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAcceptedOfflineEULA();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int32();
          break;
        case 2:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AcceptedOfflineEULA {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      version: isSet(object.version) ? String(object.version) : "",
    };
  },

  toJSON(message: AcceptedOfflineEULA): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AcceptedOfflineEULA>, I>>(
    object: I
  ): AcceptedOfflineEULA {
    const message = createBaseAcceptedOfflineEULA();
    message.id = object.id ?? 0;
    message.version = object.version ?? "";
    return message;
  },
};

function createBaseProfile(): Profile {
  return {
    enableAimAssist: false,
    gamepadInvertLook: false,
    gamepadInvertTurn: false,
    gamepadInvertMove: false,
    gamepadInvertStrafe: false,
    enableVibration: false,
    invertMousePitch: false,
    enableMouseSmoothing: false,
    mouseScale: 0,
    showDamageNumbers: false,
    showDamageNumberIcons: false,
    enableTrainingMessages: false,
    showTextChat: false,
    centerCrosshair: false,
    toggleSprint: false,
    toggleCrouch: false,
    censorContent: false,
    musicVolume: 0,
    soundEffectsVolume: 0,
    voVolume: 0,
    voiceVolume: 0,
    enableOptionalVo: false,
    pushToTalk: false,
    enableControllerAudio: false,
    speakerAngleFront: 0,
    speakerAngleSide: 0,
    speakerAngleBack: 0,
    speakerSetup: 0,
    muteAudioOnFocusLoss: false,
    challengeData: [],
    defaultDeadZoneInnerUpdated: false,
    disableEventContent: false,
    hideStrictNatHelpDialog: false,
    playerInputBindings: undefined,
    newsHashes: [],
    lastUsedSavegameId: 0,
    gamepadHipSensitivityLevel: 0,
    gamepadZoomedSensitivityLevel: 0,
    gamepadVehicleSensitivityLevel: 0,
    gamepadMovementDeadZoneX: 0,
    gamepadMovementDeadZoneY: 0,
    gamepadLookDeadZoneInnerX: 0,
    gamepadLookDeadZoneOuterX: 0,
    gamepadLookDeadZoneInnerY: 0,
    gamepadLookDeadZoneOuterY: 0,
    gamepadVehicleMovementDeadZoneX: 0,
    gamepadVehicleMovementDeadZoneY: 0,
    gamepadVehicleLookDeadZoneInnerX: 0,
    gamepadVehicleLookDeadZoneOuterX: 0,
    gamepadVehicleLookDeadZoneInnerY: 0,
    gamepadVehicleLookDeadZoneOuterY: 0,
    gamepadLeftDeadZoneInner: 0,
    gamepadLeftDeadZoneOuter: 0,
    gamepadRightDeadZoneInner: 0,
    gamepadRightDeadZoneOuter: 0,
    gamepadLookAxialDeadZoneScale: 0,
    gamepadMoveAxialDeadZoneScale: 0,
    gamepadUseAdvancedHipAimSettings: false,
    gamepadUseAdvancedZoomedAimSettings: false,
    gamepadUseAdvancedVehicleAimSettings: false,
    gamepadHipYawRate: 0,
    gamepadHipPitchRate: 0,
    gamepadHipExtraYaw: 0,
    gamepadHipExtraPitch: 0,
    gamepadHipRampUpTime: 0,
    gamepadHipRampUpDelay: 0,
    gamepadZoomedYawRate: 0,
    gamepadZoomedPitchRate: 0,
    gamepadZoomedExtraYaw: 0,
    gamepadZoomedExtraPitch: 0,
    gamepadZoomedRampUpTime: 0,
    gamepadZoomedRampUpDelay: 0,
    gamepadVehicleYawRate: 0,
    gamepadVehiclePitchRate: 0,
    gamepadVehicleExtraYaw: 0,
    gamepadVehicleExtraPitch: 0,
    gamepadVehicleRampUpTime: 0,
    gamepadVehicleRampUpDelay: 0,
    ironsightAimAssist: false,
    walkingJoystickScheme: 0,
    drivingJoystickScheme: 0,
    mouseAdsScale: 0,
    mouseVehicleScale: 0,
    mouseIronsightAimAssist: false,
    vehicleInputMode: 0,
    weaponAimToggle: false,
    mantleRequiresButton: false,
    fixedMinimapRotation: false,
    mapInvertPitch: false,
    mapInvertYaw: false,
    difficulty: 0,
    swapDualWieldControls: false,
    baseFov: 0,
    crosshairNeutralColorFrame: 0,
    crosshairEnemyColorFrame: 0,
    crosshairAllyColorFrame: 0,
    enableSubtitles: false,
    enableClosedCaptions: false,
    lastStatusMenuPage: "",
    inventoryScreenLastFilter: [],
    tutorialInfo: undefined,
    defaultNetworkType: 0,
    defaultInviteType: 0,
    matchmakingRegion: "",
    streamingService: 0,
    maxCachedFriendEvents: 0,
    maxCachedFriendStatuses: 0,
    friendEvents: [],
    friendStatuses: [],
    lastWhisperFetchEventsTime: 0,
    lastWhisperFetchStatusesTime: 0,
    friendEncounters: [],
    maxFriendEncounterSize: 0,
    profileStatsData: [],
    bankInventoryCategoryList: [],
    twoPlayerSplitscreenLayout: 0,
    lostLootInventoryList: [],
    npcMailItems: [],
    mailGuids: [],
    unreadMailGuids: [],
    gearSoldByFriends: [],
    profileSduList: [],
    unlockedCustomizations: [],
    unlockedInventoryCustomizationParts: [],
    fixedInitialZonemapRotation: false,
    enableMouseAcceleration: false,
    enableGamepadInput: false,
    useClassicGamepadInput: false,
    masterVolume: 0,
    monitorDisplayType: 0,
    graphicsMode: 0,
    frameRateLimit: 0,
    baseVehicleFov: 0,
    graphicsQuality: 0,
    anisotropicFiltering: 0,
    shadowQuality: 0,
    displayPerformanceStats: 0,
    textureDetail: 0,
    drawDistance: 0,
    clutter: 0,
    tessellation: 0,
    foliage: 0,
    foliageShadows: false,
    planarReflections: false,
    volumetricFog: 0,
    screenSpaceReflections: 0,
    characterTextureDetail: 0,
    characterDetail: 0,
    ambientOcclusionQuality: 0,
    objectMotionBlur: false,
    lensFlare: false,
    combatNumberLongFormat: false,
    showMinimapLegendaries: false,
    usePlayerCallouts: false,
    friendEventNotificationLifetime: 0,
    friendEventNotificationFrequency: 0,
    tradeRequestReceptionType: 0,
    headBobScale: 0,
    hasResetConsoleFov: false,
    hasSeenFirstBoot: false,
    badassEventEnabled: false,
    pinataEventEnabled: false,
    minTimeBetweenBadassEvents: 0,
    disableSpatialAudio: false,
    subsCcSize: 0,
    ccSubsBackgroundOpacity: 0,
    walkingButtonScheme: 0,
    drivingButtonScheme: 0,
    glyphMode: 0,
    useMPH: false,
    registeredDownloadableEntitlements: [],
    seenNewsItems: [],
    autoCenteringEnabled: false,
    increasedChanceForSubscribers: false,
    rareChestEventEnabled: false,
    hudScaleMultiplier: 0,
    totalPlaytimeSeconds: 0,
    desiredCrossplayState: 0,
    desiredFriendSyncState: 0,
    needsShiftFirstBoot: false,
    recentlyMetPlayers: [],
    enableTriggerFeedback: false,
    cameraShakeScale: 0,
    playerPrestige: undefined,
    needsShiftFirstBootPrimary: false,
    acceptedOfflineEulas: [],
    overrideAudioLanguage: "",
    bankInventoryList: [],
  };
}

export const Profile = {
  encode(
    message: Profile,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.enableAimAssist === true) {
      writer.uint32(8).bool(message.enableAimAssist);
    }
    if (message.gamepadInvertLook === true) {
      writer.uint32(16).bool(message.gamepadInvertLook);
    }
    if (message.gamepadInvertTurn === true) {
      writer.uint32(24).bool(message.gamepadInvertTurn);
    }
    if (message.gamepadInvertMove === true) {
      writer.uint32(32).bool(message.gamepadInvertMove);
    }
    if (message.gamepadInvertStrafe === true) {
      writer.uint32(40).bool(message.gamepadInvertStrafe);
    }
    if (message.enableVibration === true) {
      writer.uint32(48).bool(message.enableVibration);
    }
    if (message.invertMousePitch === true) {
      writer.uint32(56).bool(message.invertMousePitch);
    }
    if (message.enableMouseSmoothing === true) {
      writer.uint32(64).bool(message.enableMouseSmoothing);
    }
    if (message.mouseScale !== 0) {
      writer.uint32(77).float(message.mouseScale);
    }
    if (message.showDamageNumbers === true) {
      writer.uint32(80).bool(message.showDamageNumbers);
    }
    if (message.showDamageNumberIcons === true) {
      writer.uint32(88).bool(message.showDamageNumberIcons);
    }
    if (message.enableTrainingMessages === true) {
      writer.uint32(96).bool(message.enableTrainingMessages);
    }
    if (message.showTextChat === true) {
      writer.uint32(104).bool(message.showTextChat);
    }
    if (message.centerCrosshair === true) {
      writer.uint32(112).bool(message.centerCrosshair);
    }
    if (message.toggleSprint === true) {
      writer.uint32(120).bool(message.toggleSprint);
    }
    if (message.toggleCrouch === true) {
      writer.uint32(128).bool(message.toggleCrouch);
    }
    if (message.censorContent === true) {
      writer.uint32(136).bool(message.censorContent);
    }
    if (message.musicVolume !== 0) {
      writer.uint32(149).float(message.musicVolume);
    }
    if (message.soundEffectsVolume !== 0) {
      writer.uint32(157).float(message.soundEffectsVolume);
    }
    if (message.voVolume !== 0) {
      writer.uint32(165).float(message.voVolume);
    }
    if (message.voiceVolume !== 0) {
      writer.uint32(173).float(message.voiceVolume);
    }
    if (message.enableOptionalVo === true) {
      writer.uint32(176).bool(message.enableOptionalVo);
    }
    if (message.pushToTalk === true) {
      writer.uint32(184).bool(message.pushToTalk);
    }
    if (message.enableControllerAudio === true) {
      writer.uint32(192).bool(message.enableControllerAudio);
    }
    if (message.speakerAngleFront !== 0) {
      writer.uint32(205).float(message.speakerAngleFront);
    }
    if (message.speakerAngleSide !== 0) {
      writer.uint32(213).float(message.speakerAngleSide);
    }
    if (message.speakerAngleBack !== 0) {
      writer.uint32(221).float(message.speakerAngleBack);
    }
    if (message.speakerSetup !== 0) {
      writer.uint32(224).uint32(message.speakerSetup);
    }
    if (message.muteAudioOnFocusLoss === true) {
      writer.uint32(232).bool(message.muteAudioOnFocusLoss);
    }
    for (const v of message.challengeData) {
      ChallengeSaveGameData.encode(v!, writer.uint32(242).fork()).ldelim();
    }
    if (message.defaultDeadZoneInnerUpdated === true) {
      writer.uint32(256).bool(message.defaultDeadZoneInnerUpdated);
    }
    if (message.disableEventContent === true) {
      writer.uint32(264).bool(message.disableEventContent);
    }
    if (message.hideStrictNatHelpDialog === true) {
      writer.uint32(272).bool(message.hideStrictNatHelpDialog);
    }
    if (message.playerInputBindings !== undefined) {
      PlayerInputBindings.encode(
        message.playerInputBindings,
        writer.uint32(282).fork()
      ).ldelim();
    }
    writer.uint32(290).fork();
    for (const v of message.newsHashes) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.lastUsedSavegameId !== 0) {
      writer.uint32(296).uint32(message.lastUsedSavegameId);
    }
    if (message.gamepadHipSensitivityLevel !== 0) {
      writer.uint32(304).int32(message.gamepadHipSensitivityLevel);
    }
    if (message.gamepadZoomedSensitivityLevel !== 0) {
      writer.uint32(312).int32(message.gamepadZoomedSensitivityLevel);
    }
    if (message.gamepadVehicleSensitivityLevel !== 0) {
      writer.uint32(320).int32(message.gamepadVehicleSensitivityLevel);
    }
    if (message.gamepadMovementDeadZoneX !== 0) {
      writer.uint32(333).float(message.gamepadMovementDeadZoneX);
    }
    if (message.gamepadMovementDeadZoneY !== 0) {
      writer.uint32(341).float(message.gamepadMovementDeadZoneY);
    }
    if (message.gamepadLookDeadZoneInnerX !== 0) {
      writer.uint32(349).float(message.gamepadLookDeadZoneInnerX);
    }
    if (message.gamepadLookDeadZoneOuterX !== 0) {
      writer.uint32(357).float(message.gamepadLookDeadZoneOuterX);
    }
    if (message.gamepadLookDeadZoneInnerY !== 0) {
      writer.uint32(365).float(message.gamepadLookDeadZoneInnerY);
    }
    if (message.gamepadLookDeadZoneOuterY !== 0) {
      writer.uint32(373).float(message.gamepadLookDeadZoneOuterY);
    }
    if (message.gamepadVehicleMovementDeadZoneX !== 0) {
      writer.uint32(381).float(message.gamepadVehicleMovementDeadZoneX);
    }
    if (message.gamepadVehicleMovementDeadZoneY !== 0) {
      writer.uint32(389).float(message.gamepadVehicleMovementDeadZoneY);
    }
    if (message.gamepadVehicleLookDeadZoneInnerX !== 0) {
      writer.uint32(397).float(message.gamepadVehicleLookDeadZoneInnerX);
    }
    if (message.gamepadVehicleLookDeadZoneOuterX !== 0) {
      writer.uint32(405).float(message.gamepadVehicleLookDeadZoneOuterX);
    }
    if (message.gamepadVehicleLookDeadZoneInnerY !== 0) {
      writer.uint32(413).float(message.gamepadVehicleLookDeadZoneInnerY);
    }
    if (message.gamepadVehicleLookDeadZoneOuterY !== 0) {
      writer.uint32(421).float(message.gamepadVehicleLookDeadZoneOuterY);
    }
    if (message.gamepadLeftDeadZoneInner !== 0) {
      writer.uint32(429).float(message.gamepadLeftDeadZoneInner);
    }
    if (message.gamepadLeftDeadZoneOuter !== 0) {
      writer.uint32(437).float(message.gamepadLeftDeadZoneOuter);
    }
    if (message.gamepadRightDeadZoneInner !== 0) {
      writer.uint32(445).float(message.gamepadRightDeadZoneInner);
    }
    if (message.gamepadRightDeadZoneOuter !== 0) {
      writer.uint32(453).float(message.gamepadRightDeadZoneOuter);
    }
    if (message.gamepadLookAxialDeadZoneScale !== 0) {
      writer.uint32(461).float(message.gamepadLookAxialDeadZoneScale);
    }
    if (message.gamepadMoveAxialDeadZoneScale !== 0) {
      writer.uint32(469).float(message.gamepadMoveAxialDeadZoneScale);
    }
    if (message.gamepadUseAdvancedHipAimSettings === true) {
      writer.uint32(472).bool(message.gamepadUseAdvancedHipAimSettings);
    }
    if (message.gamepadUseAdvancedZoomedAimSettings === true) {
      writer.uint32(480).bool(message.gamepadUseAdvancedZoomedAimSettings);
    }
    if (message.gamepadUseAdvancedVehicleAimSettings === true) {
      writer.uint32(488).bool(message.gamepadUseAdvancedVehicleAimSettings);
    }
    if (message.gamepadHipYawRate !== 0) {
      writer.uint32(501).float(message.gamepadHipYawRate);
    }
    if (message.gamepadHipPitchRate !== 0) {
      writer.uint32(509).float(message.gamepadHipPitchRate);
    }
    if (message.gamepadHipExtraYaw !== 0) {
      writer.uint32(517).float(message.gamepadHipExtraYaw);
    }
    if (message.gamepadHipExtraPitch !== 0) {
      writer.uint32(525).float(message.gamepadHipExtraPitch);
    }
    if (message.gamepadHipRampUpTime !== 0) {
      writer.uint32(533).float(message.gamepadHipRampUpTime);
    }
    if (message.gamepadHipRampUpDelay !== 0) {
      writer.uint32(541).float(message.gamepadHipRampUpDelay);
    }
    if (message.gamepadZoomedYawRate !== 0) {
      writer.uint32(549).float(message.gamepadZoomedYawRate);
    }
    if (message.gamepadZoomedPitchRate !== 0) {
      writer.uint32(557).float(message.gamepadZoomedPitchRate);
    }
    if (message.gamepadZoomedExtraYaw !== 0) {
      writer.uint32(565).float(message.gamepadZoomedExtraYaw);
    }
    if (message.gamepadZoomedExtraPitch !== 0) {
      writer.uint32(573).float(message.gamepadZoomedExtraPitch);
    }
    if (message.gamepadZoomedRampUpTime !== 0) {
      writer.uint32(581).float(message.gamepadZoomedRampUpTime);
    }
    if (message.gamepadZoomedRampUpDelay !== 0) {
      writer.uint32(589).float(message.gamepadZoomedRampUpDelay);
    }
    if (message.gamepadVehicleYawRate !== 0) {
      writer.uint32(597).float(message.gamepadVehicleYawRate);
    }
    if (message.gamepadVehiclePitchRate !== 0) {
      writer.uint32(605).float(message.gamepadVehiclePitchRate);
    }
    if (message.gamepadVehicleExtraYaw !== 0) {
      writer.uint32(613).float(message.gamepadVehicleExtraYaw);
    }
    if (message.gamepadVehicleExtraPitch !== 0) {
      writer.uint32(621).float(message.gamepadVehicleExtraPitch);
    }
    if (message.gamepadVehicleRampUpTime !== 0) {
      writer.uint32(629).float(message.gamepadVehicleRampUpTime);
    }
    if (message.gamepadVehicleRampUpDelay !== 0) {
      writer.uint32(637).float(message.gamepadVehicleRampUpDelay);
    }
    if (message.ironsightAimAssist === true) {
      writer.uint32(640).bool(message.ironsightAimAssist);
    }
    if (message.walkingJoystickScheme !== 0) {
      writer.uint32(648).uint32(message.walkingJoystickScheme);
    }
    if (message.drivingJoystickScheme !== 0) {
      writer.uint32(656).uint32(message.drivingJoystickScheme);
    }
    if (message.mouseAdsScale !== 0) {
      writer.uint32(669).float(message.mouseAdsScale);
    }
    if (message.mouseVehicleScale !== 0) {
      writer.uint32(677).float(message.mouseVehicleScale);
    }
    if (message.mouseIronsightAimAssist === true) {
      writer.uint32(680).bool(message.mouseIronsightAimAssist);
    }
    if (message.vehicleInputMode !== 0) {
      writer.uint32(688).uint32(message.vehicleInputMode);
    }
    if (message.weaponAimToggle === true) {
      writer.uint32(696).bool(message.weaponAimToggle);
    }
    if (message.mantleRequiresButton === true) {
      writer.uint32(704).bool(message.mantleRequiresButton);
    }
    if (message.fixedMinimapRotation === true) {
      writer.uint32(712).bool(message.fixedMinimapRotation);
    }
    if (message.mapInvertPitch === true) {
      writer.uint32(720).bool(message.mapInvertPitch);
    }
    if (message.mapInvertYaw === true) {
      writer.uint32(728).bool(message.mapInvertYaw);
    }
    if (message.difficulty !== 0) {
      writer.uint32(736).uint32(message.difficulty);
    }
    if (message.swapDualWieldControls === true) {
      writer.uint32(744).bool(message.swapDualWieldControls);
    }
    if (message.baseFov !== 0) {
      writer.uint32(757).float(message.baseFov);
    }
    if (message.crosshairNeutralColorFrame !== 0) {
      writer.uint32(760).uint32(message.crosshairNeutralColorFrame);
    }
    if (message.crosshairEnemyColorFrame !== 0) {
      writer.uint32(768).uint32(message.crosshairEnemyColorFrame);
    }
    if (message.crosshairAllyColorFrame !== 0) {
      writer.uint32(776).uint32(message.crosshairAllyColorFrame);
    }
    if (message.enableSubtitles === true) {
      writer.uint32(784).bool(message.enableSubtitles);
    }
    if (message.enableClosedCaptions === true) {
      writer.uint32(792).bool(message.enableClosedCaptions);
    }
    if (message.lastStatusMenuPage !== "") {
      writer.uint32(802).string(message.lastStatusMenuPage);
    }
    for (const v of message.inventoryScreenLastFilter) {
      OakProfileLastInventoryFilterInfo.encode(
        v!,
        writer.uint32(810).fork()
      ).ldelim();
    }
    if (message.tutorialInfo !== undefined) {
      OakProfileMenuTutorialInfo.encode(
        message.tutorialInfo,
        writer.uint32(818).fork()
      ).ldelim();
    }
    if (message.defaultNetworkType !== 0) {
      writer.uint32(824).uint32(message.defaultNetworkType);
    }
    if (message.defaultInviteType !== 0) {
      writer.uint32(832).uint32(message.defaultInviteType);
    }
    if (message.matchmakingRegion !== "") {
      writer.uint32(842).string(message.matchmakingRegion);
    }
    if (message.streamingService !== 0) {
      writer.uint32(848).uint32(message.streamingService);
    }
    if (message.maxCachedFriendEvents !== 0) {
      writer.uint32(856).int32(message.maxCachedFriendEvents);
    }
    if (message.maxCachedFriendStatuses !== 0) {
      writer.uint32(864).int32(message.maxCachedFriendStatuses);
    }
    for (const v of message.friendEvents) {
      writer.uint32(874).string(v!);
    }
    for (const v of message.friendStatuses) {
      writer.uint32(882).string(v!);
    }
    if (message.lastWhisperFetchEventsTime !== 0) {
      writer.uint32(888).int64(message.lastWhisperFetchEventsTime);
    }
    if (message.lastWhisperFetchStatusesTime !== 0) {
      writer.uint32(896).int64(message.lastWhisperFetchStatusesTime);
    }
    for (const v of message.friendEncounters) {
      Profile_FriendEncountersEntry.encode(
        v!,
        writer.uint32(1066).fork()
      ).ldelim();
    }
    if (message.maxFriendEncounterSize !== 0) {
      writer.uint32(1072).int32(message.maxFriendEncounterSize);
    }
    for (const v of message.profileStatsData) {
      GameStatSaveGameData.encode(v!, writer.uint32(1082).fork()).ldelim();
    }
    for (const v of message.bankInventoryCategoryList) {
      InventoryCategorySaveData.encode(v!, writer.uint32(1090).fork()).ldelim();
    }
    if (message.twoPlayerSplitscreenLayout !== 0) {
      writer.uint32(1096).uint32(message.twoPlayerSplitscreenLayout);
    }
    for (const v of message.lostLootInventoryList) {
      writer.uint32(1106).bytes(v!);
    }
    for (const v of message.npcMailItems) {
      OakMailItem.encode(v!, writer.uint32(1114).fork()).ldelim();
    }
    for (const v of message.mailGuids) {
      writer.uint32(1122).string(v!);
    }
    for (const v of message.unreadMailGuids) {
      writer.uint32(1130).string(v!);
    }
    for (const v of message.gearSoldByFriends) {
      GearSoldByFriendData.encode(v!, writer.uint32(1138).fork()).ldelim();
    }
    for (const v of message.profileSduList) {
      OakSDUSaveGameData.encode(v!, writer.uint32(1146).fork()).ldelim();
    }
    for (const v of message.unlockedCustomizations) {
      OakCustomizationSaveGameData.encode(
        v!,
        writer.uint32(1154).fork()
      ).ldelim();
    }
    for (const v of message.unlockedInventoryCustomizationParts) {
      OakInventoryCustomizationPartInfo.encode(
        v!,
        writer.uint32(1162).fork()
      ).ldelim();
    }
    if (message.fixedInitialZonemapRotation === true) {
      writer.uint32(1192).bool(message.fixedInitialZonemapRotation);
    }
    if (message.enableMouseAcceleration === true) {
      writer.uint32(1200).bool(message.enableMouseAcceleration);
    }
    if (message.enableGamepadInput === true) {
      writer.uint32(1208).bool(message.enableGamepadInput);
    }
    if (message.useClassicGamepadInput === true) {
      writer.uint32(1216).bool(message.useClassicGamepadInput);
    }
    if (message.masterVolume !== 0) {
      writer.uint32(1229).float(message.masterVolume);
    }
    if (message.monitorDisplayType !== 0) {
      writer.uint32(1232).uint32(message.monitorDisplayType);
    }
    if (message.graphicsMode !== 0) {
      writer.uint32(1240).uint32(message.graphicsMode);
    }
    if (message.frameRateLimit !== 0) {
      writer.uint32(1248).uint32(message.frameRateLimit);
    }
    if (message.baseVehicleFov !== 0) {
      writer.uint32(1261).float(message.baseVehicleFov);
    }
    if (message.graphicsQuality !== 0) {
      writer.uint32(1264).uint32(message.graphicsQuality);
    }
    if (message.anisotropicFiltering !== 0) {
      writer.uint32(1272).uint32(message.anisotropicFiltering);
    }
    if (message.shadowQuality !== 0) {
      writer.uint32(1280).uint32(message.shadowQuality);
    }
    if (message.displayPerformanceStats !== 0) {
      writer.uint32(1288).uint32(message.displayPerformanceStats);
    }
    if (message.textureDetail !== 0) {
      writer.uint32(1296).uint32(message.textureDetail);
    }
    if (message.drawDistance !== 0) {
      writer.uint32(1304).uint32(message.drawDistance);
    }
    if (message.clutter !== 0) {
      writer.uint32(1312).uint32(message.clutter);
    }
    if (message.tessellation !== 0) {
      writer.uint32(1320).uint32(message.tessellation);
    }
    if (message.foliage !== 0) {
      writer.uint32(1328).uint32(message.foliage);
    }
    if (message.foliageShadows === true) {
      writer.uint32(1336).bool(message.foliageShadows);
    }
    if (message.planarReflections === true) {
      writer.uint32(1344).bool(message.planarReflections);
    }
    if (message.volumetricFog !== 0) {
      writer.uint32(1352).uint32(message.volumetricFog);
    }
    if (message.screenSpaceReflections !== 0) {
      writer.uint32(1360).uint32(message.screenSpaceReflections);
    }
    if (message.characterTextureDetail !== 0) {
      writer.uint32(1368).uint32(message.characterTextureDetail);
    }
    if (message.characterDetail !== 0) {
      writer.uint32(1376).uint32(message.characterDetail);
    }
    if (message.ambientOcclusionQuality !== 0) {
      writer.uint32(1384).uint32(message.ambientOcclusionQuality);
    }
    if (message.objectMotionBlur === true) {
      writer.uint32(1392).bool(message.objectMotionBlur);
    }
    if (message.lensFlare === true) {
      writer.uint32(1400).bool(message.lensFlare);
    }
    if (message.combatNumberLongFormat === true) {
      writer.uint32(1408).bool(message.combatNumberLongFormat);
    }
    if (message.showMinimapLegendaries === true) {
      writer.uint32(1416).bool(message.showMinimapLegendaries);
    }
    if (message.usePlayerCallouts === true) {
      writer.uint32(1424).bool(message.usePlayerCallouts);
    }
    if (message.friendEventNotificationLifetime !== 0) {
      writer.uint32(1432).uint32(message.friendEventNotificationLifetime);
    }
    if (message.friendEventNotificationFrequency !== 0) {
      writer.uint32(1440).uint32(message.friendEventNotificationFrequency);
    }
    if (message.tradeRequestReceptionType !== 0) {
      writer.uint32(1448).uint32(message.tradeRequestReceptionType);
    }
    if (message.headBobScale !== 0) {
      writer.uint32(1461).float(message.headBobScale);
    }
    if (message.hasResetConsoleFov === true) {
      writer.uint32(1464).bool(message.hasResetConsoleFov);
    }
    if (message.hasSeenFirstBoot === true) {
      writer.uint32(1472).bool(message.hasSeenFirstBoot);
    }
    if (message.badassEventEnabled === true) {
      writer.uint32(1480).bool(message.badassEventEnabled);
    }
    if (message.pinataEventEnabled === true) {
      writer.uint32(1488).bool(message.pinataEventEnabled);
    }
    if (message.minTimeBetweenBadassEvents !== 0) {
      writer.uint32(1496).int32(message.minTimeBetweenBadassEvents);
    }
    if (message.disableSpatialAudio === true) {
      writer.uint32(1504).bool(message.disableSpatialAudio);
    }
    if (message.subsCcSize !== 0) {
      writer.uint32(1517).float(message.subsCcSize);
    }
    if (message.ccSubsBackgroundOpacity !== 0) {
      writer.uint32(1525).float(message.ccSubsBackgroundOpacity);
    }
    if (message.walkingButtonScheme !== 0) {
      writer.uint32(1528).uint32(message.walkingButtonScheme);
    }
    if (message.drivingButtonScheme !== 0) {
      writer.uint32(1536).uint32(message.drivingButtonScheme);
    }
    if (message.glyphMode !== 0) {
      writer.uint32(1544).uint32(message.glyphMode);
    }
    if (message.useMPH === true) {
      writer.uint32(1552).bool(message.useMPH);
    }
    for (const v of message.registeredDownloadableEntitlements) {
      RegisteredDownloadableEntitlements.encode(
        v!,
        writer.uint32(1562).fork()
      ).ldelim();
    }
    for (const v of message.seenNewsItems) {
      writer.uint32(1570).string(v!);
    }
    if (message.autoCenteringEnabled === true) {
      writer.uint32(1576).bool(message.autoCenteringEnabled);
    }
    if (message.increasedChanceForSubscribers === true) {
      writer.uint32(1584).bool(message.increasedChanceForSubscribers);
    }
    if (message.rareChestEventEnabled === true) {
      writer.uint32(1592).bool(message.rareChestEventEnabled);
    }
    if (message.hudScaleMultiplier !== 0) {
      writer.uint32(1605).float(message.hudScaleMultiplier);
    }
    if (message.totalPlaytimeSeconds !== 0) {
      writer.uint32(1608).int32(message.totalPlaytimeSeconds);
    }
    if (message.desiredCrossplayState !== 0) {
      writer.uint32(1616).uint32(message.desiredCrossplayState);
    }
    if (message.desiredFriendSyncState !== 0) {
      writer.uint32(1624).uint32(message.desiredFriendSyncState);
    }
    if (message.needsShiftFirstBoot === true) {
      writer.uint32(1632).bool(message.needsShiftFirstBoot);
    }
    for (const v of message.recentlyMetPlayers) {
      RecentlyMetPlayer.encode(v!, writer.uint32(1642).fork()).ldelim();
    }
    if (message.enableTriggerFeedback === true) {
      writer.uint32(1648).bool(message.enableTriggerFeedback);
    }
    if (message.cameraShakeScale !== 0) {
      writer.uint32(1661).float(message.cameraShakeScale);
    }
    if (message.playerPrestige !== undefined) {
      PlayerPrestigeProfileData.encode(
        message.playerPrestige,
        writer.uint32(1666).fork()
      ).ldelim();
    }
    if (message.needsShiftFirstBootPrimary === true) {
      writer.uint32(1672).bool(message.needsShiftFirstBootPrimary);
    }
    for (const v of message.acceptedOfflineEulas) {
      AcceptedOfflineEULA.encode(v!, writer.uint32(1682).fork()).ldelim();
    }
    if (message.overrideAudioLanguage !== "") {
      writer.uint32(1690).string(message.overrideAudioLanguage);
    }
    for (const v of message.bankInventoryList) {
      OakInventoryItemSaveGameData.encode(
        v!,
        writer.uint32(1698).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Profile {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.enableAimAssist = reader.bool();
          break;
        case 2:
          message.gamepadInvertLook = reader.bool();
          break;
        case 3:
          message.gamepadInvertTurn = reader.bool();
          break;
        case 4:
          message.gamepadInvertMove = reader.bool();
          break;
        case 5:
          message.gamepadInvertStrafe = reader.bool();
          break;
        case 6:
          message.enableVibration = reader.bool();
          break;
        case 7:
          message.invertMousePitch = reader.bool();
          break;
        case 8:
          message.enableMouseSmoothing = reader.bool();
          break;
        case 9:
          message.mouseScale = reader.float();
          break;
        case 10:
          message.showDamageNumbers = reader.bool();
          break;
        case 11:
          message.showDamageNumberIcons = reader.bool();
          break;
        case 12:
          message.enableTrainingMessages = reader.bool();
          break;
        case 13:
          message.showTextChat = reader.bool();
          break;
        case 14:
          message.centerCrosshair = reader.bool();
          break;
        case 15:
          message.toggleSprint = reader.bool();
          break;
        case 16:
          message.toggleCrouch = reader.bool();
          break;
        case 17:
          message.censorContent = reader.bool();
          break;
        case 18:
          message.musicVolume = reader.float();
          break;
        case 19:
          message.soundEffectsVolume = reader.float();
          break;
        case 20:
          message.voVolume = reader.float();
          break;
        case 21:
          message.voiceVolume = reader.float();
          break;
        case 22:
          message.enableOptionalVo = reader.bool();
          break;
        case 23:
          message.pushToTalk = reader.bool();
          break;
        case 24:
          message.enableControllerAudio = reader.bool();
          break;
        case 25:
          message.speakerAngleFront = reader.float();
          break;
        case 26:
          message.speakerAngleSide = reader.float();
          break;
        case 27:
          message.speakerAngleBack = reader.float();
          break;
        case 28:
          message.speakerSetup = reader.uint32();
          break;
        case 29:
          message.muteAudioOnFocusLoss = reader.bool();
          break;
        case 30:
          message.challengeData.push(
            ChallengeSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 32:
          message.defaultDeadZoneInnerUpdated = reader.bool();
          break;
        case 33:
          message.disableEventContent = reader.bool();
          break;
        case 34:
          message.hideStrictNatHelpDialog = reader.bool();
          break;
        case 35:
          message.playerInputBindings = PlayerInputBindings.decode(
            reader,
            reader.uint32()
          );
          break;
        case 36:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.newsHashes.push(reader.uint32());
            }
          } else {
            message.newsHashes.push(reader.uint32());
          }
          break;
        case 37:
          message.lastUsedSavegameId = reader.uint32();
          break;
        case 38:
          message.gamepadHipSensitivityLevel = reader.int32();
          break;
        case 39:
          message.gamepadZoomedSensitivityLevel = reader.int32();
          break;
        case 40:
          message.gamepadVehicleSensitivityLevel = reader.int32();
          break;
        case 41:
          message.gamepadMovementDeadZoneX = reader.float();
          break;
        case 42:
          message.gamepadMovementDeadZoneY = reader.float();
          break;
        case 43:
          message.gamepadLookDeadZoneInnerX = reader.float();
          break;
        case 44:
          message.gamepadLookDeadZoneOuterX = reader.float();
          break;
        case 45:
          message.gamepadLookDeadZoneInnerY = reader.float();
          break;
        case 46:
          message.gamepadLookDeadZoneOuterY = reader.float();
          break;
        case 47:
          message.gamepadVehicleMovementDeadZoneX = reader.float();
          break;
        case 48:
          message.gamepadVehicleMovementDeadZoneY = reader.float();
          break;
        case 49:
          message.gamepadVehicleLookDeadZoneInnerX = reader.float();
          break;
        case 50:
          message.gamepadVehicleLookDeadZoneOuterX = reader.float();
          break;
        case 51:
          message.gamepadVehicleLookDeadZoneInnerY = reader.float();
          break;
        case 52:
          message.gamepadVehicleLookDeadZoneOuterY = reader.float();
          break;
        case 53:
          message.gamepadLeftDeadZoneInner = reader.float();
          break;
        case 54:
          message.gamepadLeftDeadZoneOuter = reader.float();
          break;
        case 55:
          message.gamepadRightDeadZoneInner = reader.float();
          break;
        case 56:
          message.gamepadRightDeadZoneOuter = reader.float();
          break;
        case 57:
          message.gamepadLookAxialDeadZoneScale = reader.float();
          break;
        case 58:
          message.gamepadMoveAxialDeadZoneScale = reader.float();
          break;
        case 59:
          message.gamepadUseAdvancedHipAimSettings = reader.bool();
          break;
        case 60:
          message.gamepadUseAdvancedZoomedAimSettings = reader.bool();
          break;
        case 61:
          message.gamepadUseAdvancedVehicleAimSettings = reader.bool();
          break;
        case 62:
          message.gamepadHipYawRate = reader.float();
          break;
        case 63:
          message.gamepadHipPitchRate = reader.float();
          break;
        case 64:
          message.gamepadHipExtraYaw = reader.float();
          break;
        case 65:
          message.gamepadHipExtraPitch = reader.float();
          break;
        case 66:
          message.gamepadHipRampUpTime = reader.float();
          break;
        case 67:
          message.gamepadHipRampUpDelay = reader.float();
          break;
        case 68:
          message.gamepadZoomedYawRate = reader.float();
          break;
        case 69:
          message.gamepadZoomedPitchRate = reader.float();
          break;
        case 70:
          message.gamepadZoomedExtraYaw = reader.float();
          break;
        case 71:
          message.gamepadZoomedExtraPitch = reader.float();
          break;
        case 72:
          message.gamepadZoomedRampUpTime = reader.float();
          break;
        case 73:
          message.gamepadZoomedRampUpDelay = reader.float();
          break;
        case 74:
          message.gamepadVehicleYawRate = reader.float();
          break;
        case 75:
          message.gamepadVehiclePitchRate = reader.float();
          break;
        case 76:
          message.gamepadVehicleExtraYaw = reader.float();
          break;
        case 77:
          message.gamepadVehicleExtraPitch = reader.float();
          break;
        case 78:
          message.gamepadVehicleRampUpTime = reader.float();
          break;
        case 79:
          message.gamepadVehicleRampUpDelay = reader.float();
          break;
        case 80:
          message.ironsightAimAssist = reader.bool();
          break;
        case 81:
          message.walkingJoystickScheme = reader.uint32();
          break;
        case 82:
          message.drivingJoystickScheme = reader.uint32();
          break;
        case 83:
          message.mouseAdsScale = reader.float();
          break;
        case 84:
          message.mouseVehicleScale = reader.float();
          break;
        case 85:
          message.mouseIronsightAimAssist = reader.bool();
          break;
        case 86:
          message.vehicleInputMode = reader.uint32();
          break;
        case 87:
          message.weaponAimToggle = reader.bool();
          break;
        case 88:
          message.mantleRequiresButton = reader.bool();
          break;
        case 89:
          message.fixedMinimapRotation = reader.bool();
          break;
        case 90:
          message.mapInvertPitch = reader.bool();
          break;
        case 91:
          message.mapInvertYaw = reader.bool();
          break;
        case 92:
          message.difficulty = reader.uint32();
          break;
        case 93:
          message.swapDualWieldControls = reader.bool();
          break;
        case 94:
          message.baseFov = reader.float();
          break;
        case 95:
          message.crosshairNeutralColorFrame = reader.uint32();
          break;
        case 96:
          message.crosshairEnemyColorFrame = reader.uint32();
          break;
        case 97:
          message.crosshairAllyColorFrame = reader.uint32();
          break;
        case 98:
          message.enableSubtitles = reader.bool();
          break;
        case 99:
          message.enableClosedCaptions = reader.bool();
          break;
        case 100:
          message.lastStatusMenuPage = reader.string();
          break;
        case 101:
          message.inventoryScreenLastFilter.push(
            OakProfileLastInventoryFilterInfo.decode(reader, reader.uint32())
          );
          break;
        case 102:
          message.tutorialInfo = OakProfileMenuTutorialInfo.decode(
            reader,
            reader.uint32()
          );
          break;
        case 103:
          message.defaultNetworkType = reader.uint32();
          break;
        case 104:
          message.defaultInviteType = reader.uint32();
          break;
        case 105:
          message.matchmakingRegion = reader.string();
          break;
        case 106:
          message.streamingService = reader.uint32();
          break;
        case 107:
          message.maxCachedFriendEvents = reader.int32();
          break;
        case 108:
          message.maxCachedFriendStatuses = reader.int32();
          break;
        case 109:
          message.friendEvents.push(reader.string());
          break;
        case 110:
          message.friendStatuses.push(reader.string());
          break;
        case 111:
          message.lastWhisperFetchEventsTime = longToNumber(
            reader.int64() as Long
          );
          break;
        case 112:
          message.lastWhisperFetchStatusesTime = longToNumber(
            reader.int64() as Long
          );
          break;
        case 133:
          message.friendEncounters.push(
            Profile_FriendEncountersEntry.decode(reader, reader.uint32())
          );
          break;
        case 134:
          message.maxFriendEncounterSize = reader.int32();
          break;
        case 135:
          message.profileStatsData.push(
            GameStatSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 136:
          message.bankInventoryCategoryList.push(
            InventoryCategorySaveData.decode(reader, reader.uint32())
          );
          break;
        case 137:
          message.twoPlayerSplitscreenLayout = reader.uint32();
          break;
        case 138:
          message.lostLootInventoryList.push(reader.bytes());
          break;
        case 139:
          message.npcMailItems.push(
            OakMailItem.decode(reader, reader.uint32())
          );
          break;
        case 140:
          message.mailGuids.push(reader.string());
          break;
        case 141:
          message.unreadMailGuids.push(reader.string());
          break;
        case 142:
          message.gearSoldByFriends.push(
            GearSoldByFriendData.decode(reader, reader.uint32())
          );
          break;
        case 143:
          message.profileSduList.push(
            OakSDUSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 144:
          message.unlockedCustomizations.push(
            OakCustomizationSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 145:
          message.unlockedInventoryCustomizationParts.push(
            OakInventoryCustomizationPartInfo.decode(reader, reader.uint32())
          );
          break;
        case 149:
          message.fixedInitialZonemapRotation = reader.bool();
          break;
        case 150:
          message.enableMouseAcceleration = reader.bool();
          break;
        case 151:
          message.enableGamepadInput = reader.bool();
          break;
        case 152:
          message.useClassicGamepadInput = reader.bool();
          break;
        case 153:
          message.masterVolume = reader.float();
          break;
        case 154:
          message.monitorDisplayType = reader.uint32();
          break;
        case 155:
          message.graphicsMode = reader.uint32();
          break;
        case 156:
          message.frameRateLimit = reader.uint32();
          break;
        case 157:
          message.baseVehicleFov = reader.float();
          break;
        case 158:
          message.graphicsQuality = reader.uint32();
          break;
        case 159:
          message.anisotropicFiltering = reader.uint32();
          break;
        case 160:
          message.shadowQuality = reader.uint32();
          break;
        case 161:
          message.displayPerformanceStats = reader.uint32();
          break;
        case 162:
          message.textureDetail = reader.uint32();
          break;
        case 163:
          message.drawDistance = reader.uint32();
          break;
        case 164:
          message.clutter = reader.uint32();
          break;
        case 165:
          message.tessellation = reader.uint32();
          break;
        case 166:
          message.foliage = reader.uint32();
          break;
        case 167:
          message.foliageShadows = reader.bool();
          break;
        case 168:
          message.planarReflections = reader.bool();
          break;
        case 169:
          message.volumetricFog = reader.uint32();
          break;
        case 170:
          message.screenSpaceReflections = reader.uint32();
          break;
        case 171:
          message.characterTextureDetail = reader.uint32();
          break;
        case 172:
          message.characterDetail = reader.uint32();
          break;
        case 173:
          message.ambientOcclusionQuality = reader.uint32();
          break;
        case 174:
          message.objectMotionBlur = reader.bool();
          break;
        case 175:
          message.lensFlare = reader.bool();
          break;
        case 176:
          message.combatNumberLongFormat = reader.bool();
          break;
        case 177:
          message.showMinimapLegendaries = reader.bool();
          break;
        case 178:
          message.usePlayerCallouts = reader.bool();
          break;
        case 179:
          message.friendEventNotificationLifetime = reader.uint32();
          break;
        case 180:
          message.friendEventNotificationFrequency = reader.uint32();
          break;
        case 181:
          message.tradeRequestReceptionType = reader.uint32();
          break;
        case 182:
          message.headBobScale = reader.float();
          break;
        case 183:
          message.hasResetConsoleFov = reader.bool();
          break;
        case 184:
          message.hasSeenFirstBoot = reader.bool();
          break;
        case 185:
          message.badassEventEnabled = reader.bool();
          break;
        case 186:
          message.pinataEventEnabled = reader.bool();
          break;
        case 187:
          message.minTimeBetweenBadassEvents = reader.int32();
          break;
        case 188:
          message.disableSpatialAudio = reader.bool();
          break;
        case 189:
          message.subsCcSize = reader.float();
          break;
        case 190:
          message.ccSubsBackgroundOpacity = reader.float();
          break;
        case 191:
          message.walkingButtonScheme = reader.uint32();
          break;
        case 192:
          message.drivingButtonScheme = reader.uint32();
          break;
        case 193:
          message.glyphMode = reader.uint32();
          break;
        case 194:
          message.useMPH = reader.bool();
          break;
        case 195:
          message.registeredDownloadableEntitlements.push(
            RegisteredDownloadableEntitlements.decode(reader, reader.uint32())
          );
          break;
        case 196:
          message.seenNewsItems.push(reader.string());
          break;
        case 197:
          message.autoCenteringEnabled = reader.bool();
          break;
        case 198:
          message.increasedChanceForSubscribers = reader.bool();
          break;
        case 199:
          message.rareChestEventEnabled = reader.bool();
          break;
        case 200:
          message.hudScaleMultiplier = reader.float();
          break;
        case 201:
          message.totalPlaytimeSeconds = reader.int32();
          break;
        case 202:
          message.desiredCrossplayState = reader.uint32();
          break;
        case 203:
          message.desiredFriendSyncState = reader.uint32();
          break;
        case 204:
          message.needsShiftFirstBoot = reader.bool();
          break;
        case 205:
          message.recentlyMetPlayers.push(
            RecentlyMetPlayer.decode(reader, reader.uint32())
          );
          break;
        case 206:
          message.enableTriggerFeedback = reader.bool();
          break;
        case 207:
          message.cameraShakeScale = reader.float();
          break;
        case 208:
          message.playerPrestige = PlayerPrestigeProfileData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 209:
          message.needsShiftFirstBootPrimary = reader.bool();
          break;
        case 210:
          message.acceptedOfflineEulas.push(
            AcceptedOfflineEULA.decode(reader, reader.uint32())
          );
          break;
        case 211:
          message.overrideAudioLanguage = reader.string();
          break;
        case 212:
          message.bankInventoryList.push(
            OakInventoryItemSaveGameData.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Profile {
    return {
      enableAimAssist: isSet(object.enableAimAssist)
        ? Boolean(object.enableAimAssist)
        : false,
      gamepadInvertLook: isSet(object.gamepadInvertLook)
        ? Boolean(object.gamepadInvertLook)
        : false,
      gamepadInvertTurn: isSet(object.gamepadInvertTurn)
        ? Boolean(object.gamepadInvertTurn)
        : false,
      gamepadInvertMove: isSet(object.gamepadInvertMove)
        ? Boolean(object.gamepadInvertMove)
        : false,
      gamepadInvertStrafe: isSet(object.gamepadInvertStrafe)
        ? Boolean(object.gamepadInvertStrafe)
        : false,
      enableVibration: isSet(object.enableVibration)
        ? Boolean(object.enableVibration)
        : false,
      invertMousePitch: isSet(object.invertMousePitch)
        ? Boolean(object.invertMousePitch)
        : false,
      enableMouseSmoothing: isSet(object.enableMouseSmoothing)
        ? Boolean(object.enableMouseSmoothing)
        : false,
      mouseScale: isSet(object.mouseScale) ? Number(object.mouseScale) : 0,
      showDamageNumbers: isSet(object.showDamageNumbers)
        ? Boolean(object.showDamageNumbers)
        : false,
      showDamageNumberIcons: isSet(object.showDamageNumberIcons)
        ? Boolean(object.showDamageNumberIcons)
        : false,
      enableTrainingMessages: isSet(object.enableTrainingMessages)
        ? Boolean(object.enableTrainingMessages)
        : false,
      showTextChat: isSet(object.showTextChat)
        ? Boolean(object.showTextChat)
        : false,
      centerCrosshair: isSet(object.centerCrosshair)
        ? Boolean(object.centerCrosshair)
        : false,
      toggleSprint: isSet(object.toggleSprint)
        ? Boolean(object.toggleSprint)
        : false,
      toggleCrouch: isSet(object.toggleCrouch)
        ? Boolean(object.toggleCrouch)
        : false,
      censorContent: isSet(object.censorContent)
        ? Boolean(object.censorContent)
        : false,
      musicVolume: isSet(object.musicVolume) ? Number(object.musicVolume) : 0,
      soundEffectsVolume: isSet(object.soundEffectsVolume)
        ? Number(object.soundEffectsVolume)
        : 0,
      voVolume: isSet(object.voVolume) ? Number(object.voVolume) : 0,
      voiceVolume: isSet(object.voiceVolume) ? Number(object.voiceVolume) : 0,
      enableOptionalVo: isSet(object.enableOptionalVo)
        ? Boolean(object.enableOptionalVo)
        : false,
      pushToTalk: isSet(object.pushToTalk) ? Boolean(object.pushToTalk) : false,
      enableControllerAudio: isSet(object.enableControllerAudio)
        ? Boolean(object.enableControllerAudio)
        : false,
      speakerAngleFront: isSet(object.speakerAngleFront)
        ? Number(object.speakerAngleFront)
        : 0,
      speakerAngleSide: isSet(object.speakerAngleSide)
        ? Number(object.speakerAngleSide)
        : 0,
      speakerAngleBack: isSet(object.speakerAngleBack)
        ? Number(object.speakerAngleBack)
        : 0,
      speakerSetup: isSet(object.speakerSetup)
        ? Number(object.speakerSetup)
        : 0,
      muteAudioOnFocusLoss: isSet(object.muteAudioOnFocusLoss)
        ? Boolean(object.muteAudioOnFocusLoss)
        : false,
      challengeData: Array.isArray(object?.challengeData)
        ? object.challengeData.map((e: any) =>
            ChallengeSaveGameData.fromJSON(e)
          )
        : [],
      defaultDeadZoneInnerUpdated: isSet(object.defaultDeadZoneInnerUpdated)
        ? Boolean(object.defaultDeadZoneInnerUpdated)
        : false,
      disableEventContent: isSet(object.disableEventContent)
        ? Boolean(object.disableEventContent)
        : false,
      hideStrictNatHelpDialog: isSet(object.hideStrictNatHelpDialog)
        ? Boolean(object.hideStrictNatHelpDialog)
        : false,
      playerInputBindings: isSet(object.playerInputBindings)
        ? PlayerInputBindings.fromJSON(object.playerInputBindings)
        : undefined,
      newsHashes: Array.isArray(object?.newsHashes)
        ? object.newsHashes.map((e: any) => Number(e))
        : [],
      lastUsedSavegameId: isSet(object.lastUsedSavegameId)
        ? Number(object.lastUsedSavegameId)
        : 0,
      gamepadHipSensitivityLevel: isSet(object.gamepadHipSensitivityLevel)
        ? Number(object.gamepadHipSensitivityLevel)
        : 0,
      gamepadZoomedSensitivityLevel: isSet(object.gamepadZoomedSensitivityLevel)
        ? Number(object.gamepadZoomedSensitivityLevel)
        : 0,
      gamepadVehicleSensitivityLevel: isSet(
        object.gamepadVehicleSensitivityLevel
      )
        ? Number(object.gamepadVehicleSensitivityLevel)
        : 0,
      gamepadMovementDeadZoneX: isSet(object.gamepadMovementDeadZoneX)
        ? Number(object.gamepadMovementDeadZoneX)
        : 0,
      gamepadMovementDeadZoneY: isSet(object.gamepadMovementDeadZoneY)
        ? Number(object.gamepadMovementDeadZoneY)
        : 0,
      gamepadLookDeadZoneInnerX: isSet(object.gamepadLookDeadZoneInnerX)
        ? Number(object.gamepadLookDeadZoneInnerX)
        : 0,
      gamepadLookDeadZoneOuterX: isSet(object.gamepadLookDeadZoneOuterX)
        ? Number(object.gamepadLookDeadZoneOuterX)
        : 0,
      gamepadLookDeadZoneInnerY: isSet(object.gamepadLookDeadZoneInnerY)
        ? Number(object.gamepadLookDeadZoneInnerY)
        : 0,
      gamepadLookDeadZoneOuterY: isSet(object.gamepadLookDeadZoneOuterY)
        ? Number(object.gamepadLookDeadZoneOuterY)
        : 0,
      gamepadVehicleMovementDeadZoneX: isSet(
        object.gamepadVehicleMovementDeadZoneX
      )
        ? Number(object.gamepadVehicleMovementDeadZoneX)
        : 0,
      gamepadVehicleMovementDeadZoneY: isSet(
        object.gamepadVehicleMovementDeadZoneY
      )
        ? Number(object.gamepadVehicleMovementDeadZoneY)
        : 0,
      gamepadVehicleLookDeadZoneInnerX: isSet(
        object.gamepadVehicleLookDeadZoneInnerX
      )
        ? Number(object.gamepadVehicleLookDeadZoneInnerX)
        : 0,
      gamepadVehicleLookDeadZoneOuterX: isSet(
        object.gamepadVehicleLookDeadZoneOuterX
      )
        ? Number(object.gamepadVehicleLookDeadZoneOuterX)
        : 0,
      gamepadVehicleLookDeadZoneInnerY: isSet(
        object.gamepadVehicleLookDeadZoneInnerY
      )
        ? Number(object.gamepadVehicleLookDeadZoneInnerY)
        : 0,
      gamepadVehicleLookDeadZoneOuterY: isSet(
        object.gamepadVehicleLookDeadZoneOuterY
      )
        ? Number(object.gamepadVehicleLookDeadZoneOuterY)
        : 0,
      gamepadLeftDeadZoneInner: isSet(object.gamepadLeftDeadZoneInner)
        ? Number(object.gamepadLeftDeadZoneInner)
        : 0,
      gamepadLeftDeadZoneOuter: isSet(object.gamepadLeftDeadZoneOuter)
        ? Number(object.gamepadLeftDeadZoneOuter)
        : 0,
      gamepadRightDeadZoneInner: isSet(object.gamepadRightDeadZoneInner)
        ? Number(object.gamepadRightDeadZoneInner)
        : 0,
      gamepadRightDeadZoneOuter: isSet(object.gamepadRightDeadZoneOuter)
        ? Number(object.gamepadRightDeadZoneOuter)
        : 0,
      gamepadLookAxialDeadZoneScale: isSet(object.gamepadLookAxialDeadZoneScale)
        ? Number(object.gamepadLookAxialDeadZoneScale)
        : 0,
      gamepadMoveAxialDeadZoneScale: isSet(object.gamepadMoveAxialDeadZoneScale)
        ? Number(object.gamepadMoveAxialDeadZoneScale)
        : 0,
      gamepadUseAdvancedHipAimSettings: isSet(
        object.gamepadUseAdvancedHipAimSettings
      )
        ? Boolean(object.gamepadUseAdvancedHipAimSettings)
        : false,
      gamepadUseAdvancedZoomedAimSettings: isSet(
        object.gamepadUseAdvancedZoomedAimSettings
      )
        ? Boolean(object.gamepadUseAdvancedZoomedAimSettings)
        : false,
      gamepadUseAdvancedVehicleAimSettings: isSet(
        object.gamepadUseAdvancedVehicleAimSettings
      )
        ? Boolean(object.gamepadUseAdvancedVehicleAimSettings)
        : false,
      gamepadHipYawRate: isSet(object.gamepadHipYawRate)
        ? Number(object.gamepadHipYawRate)
        : 0,
      gamepadHipPitchRate: isSet(object.gamepadHipPitchRate)
        ? Number(object.gamepadHipPitchRate)
        : 0,
      gamepadHipExtraYaw: isSet(object.gamepadHipExtraYaw)
        ? Number(object.gamepadHipExtraYaw)
        : 0,
      gamepadHipExtraPitch: isSet(object.gamepadHipExtraPitch)
        ? Number(object.gamepadHipExtraPitch)
        : 0,
      gamepadHipRampUpTime: isSet(object.gamepadHipRampUpTime)
        ? Number(object.gamepadHipRampUpTime)
        : 0,
      gamepadHipRampUpDelay: isSet(object.gamepadHipRampUpDelay)
        ? Number(object.gamepadHipRampUpDelay)
        : 0,
      gamepadZoomedYawRate: isSet(object.gamepadZoomedYawRate)
        ? Number(object.gamepadZoomedYawRate)
        : 0,
      gamepadZoomedPitchRate: isSet(object.gamepadZoomedPitchRate)
        ? Number(object.gamepadZoomedPitchRate)
        : 0,
      gamepadZoomedExtraYaw: isSet(object.gamepadZoomedExtraYaw)
        ? Number(object.gamepadZoomedExtraYaw)
        : 0,
      gamepadZoomedExtraPitch: isSet(object.gamepadZoomedExtraPitch)
        ? Number(object.gamepadZoomedExtraPitch)
        : 0,
      gamepadZoomedRampUpTime: isSet(object.gamepadZoomedRampUpTime)
        ? Number(object.gamepadZoomedRampUpTime)
        : 0,
      gamepadZoomedRampUpDelay: isSet(object.gamepadZoomedRampUpDelay)
        ? Number(object.gamepadZoomedRampUpDelay)
        : 0,
      gamepadVehicleYawRate: isSet(object.gamepadVehicleYawRate)
        ? Number(object.gamepadVehicleYawRate)
        : 0,
      gamepadVehiclePitchRate: isSet(object.gamepadVehiclePitchRate)
        ? Number(object.gamepadVehiclePitchRate)
        : 0,
      gamepadVehicleExtraYaw: isSet(object.gamepadVehicleExtraYaw)
        ? Number(object.gamepadVehicleExtraYaw)
        : 0,
      gamepadVehicleExtraPitch: isSet(object.gamepadVehicleExtraPitch)
        ? Number(object.gamepadVehicleExtraPitch)
        : 0,
      gamepadVehicleRampUpTime: isSet(object.gamepadVehicleRampUpTime)
        ? Number(object.gamepadVehicleRampUpTime)
        : 0,
      gamepadVehicleRampUpDelay: isSet(object.gamepadVehicleRampUpDelay)
        ? Number(object.gamepadVehicleRampUpDelay)
        : 0,
      ironsightAimAssist: isSet(object.ironsightAimAssist)
        ? Boolean(object.ironsightAimAssist)
        : false,
      walkingJoystickScheme: isSet(object.walkingJoystickScheme)
        ? Number(object.walkingJoystickScheme)
        : 0,
      drivingJoystickScheme: isSet(object.drivingJoystickScheme)
        ? Number(object.drivingJoystickScheme)
        : 0,
      mouseAdsScale: isSet(object.mouseAdsScale)
        ? Number(object.mouseAdsScale)
        : 0,
      mouseVehicleScale: isSet(object.mouseVehicleScale)
        ? Number(object.mouseVehicleScale)
        : 0,
      mouseIronsightAimAssist: isSet(object.mouseIronsightAimAssist)
        ? Boolean(object.mouseIronsightAimAssist)
        : false,
      vehicleInputMode: isSet(object.vehicleInputMode)
        ? Number(object.vehicleInputMode)
        : 0,
      weaponAimToggle: isSet(object.weaponAimToggle)
        ? Boolean(object.weaponAimToggle)
        : false,
      mantleRequiresButton: isSet(object.mantleRequiresButton)
        ? Boolean(object.mantleRequiresButton)
        : false,
      fixedMinimapRotation: isSet(object.fixedMinimapRotation)
        ? Boolean(object.fixedMinimapRotation)
        : false,
      mapInvertPitch: isSet(object.mapInvertPitch)
        ? Boolean(object.mapInvertPitch)
        : false,
      mapInvertYaw: isSet(object.mapInvertYaw)
        ? Boolean(object.mapInvertYaw)
        : false,
      difficulty: isSet(object.difficulty) ? Number(object.difficulty) : 0,
      swapDualWieldControls: isSet(object.swapDualWieldControls)
        ? Boolean(object.swapDualWieldControls)
        : false,
      baseFov: isSet(object.baseFov) ? Number(object.baseFov) : 0,
      crosshairNeutralColorFrame: isSet(object.crosshairNeutralColorFrame)
        ? Number(object.crosshairNeutralColorFrame)
        : 0,
      crosshairEnemyColorFrame: isSet(object.crosshairEnemyColorFrame)
        ? Number(object.crosshairEnemyColorFrame)
        : 0,
      crosshairAllyColorFrame: isSet(object.crosshairAllyColorFrame)
        ? Number(object.crosshairAllyColorFrame)
        : 0,
      enableSubtitles: isSet(object.enableSubtitles)
        ? Boolean(object.enableSubtitles)
        : false,
      enableClosedCaptions: isSet(object.enableClosedCaptions)
        ? Boolean(object.enableClosedCaptions)
        : false,
      lastStatusMenuPage: isSet(object.lastStatusMenuPage)
        ? String(object.lastStatusMenuPage)
        : "",
      inventoryScreenLastFilter: Array.isArray(
        object?.inventoryScreenLastFilter
      )
        ? object.inventoryScreenLastFilter.map((e: any) =>
            OakProfileLastInventoryFilterInfo.fromJSON(e)
          )
        : [],
      tutorialInfo: isSet(object.tutorialInfo)
        ? OakProfileMenuTutorialInfo.fromJSON(object.tutorialInfo)
        : undefined,
      defaultNetworkType: isSet(object.defaultNetworkType)
        ? Number(object.defaultNetworkType)
        : 0,
      defaultInviteType: isSet(object.defaultInviteType)
        ? Number(object.defaultInviteType)
        : 0,
      matchmakingRegion: isSet(object.matchmakingRegion)
        ? String(object.matchmakingRegion)
        : "",
      streamingService: isSet(object.streamingService)
        ? Number(object.streamingService)
        : 0,
      maxCachedFriendEvents: isSet(object.maxCachedFriendEvents)
        ? Number(object.maxCachedFriendEvents)
        : 0,
      maxCachedFriendStatuses: isSet(object.maxCachedFriendStatuses)
        ? Number(object.maxCachedFriendStatuses)
        : 0,
      friendEvents: Array.isArray(object?.friendEvents)
        ? object.friendEvents.map((e: any) => String(e))
        : [],
      friendStatuses: Array.isArray(object?.friendStatuses)
        ? object.friendStatuses.map((e: any) => String(e))
        : [],
      lastWhisperFetchEventsTime: isSet(object.lastWhisperFetchEventsTime)
        ? Number(object.lastWhisperFetchEventsTime)
        : 0,
      lastWhisperFetchStatusesTime: isSet(object.lastWhisperFetchStatusesTime)
        ? Number(object.lastWhisperFetchStatusesTime)
        : 0,
      friendEncounters: Array.isArray(object?.friendEncounters)
        ? object.friendEncounters.map((e: any) =>
            Profile_FriendEncountersEntry.fromJSON(e)
          )
        : [],
      maxFriendEncounterSize: isSet(object.maxFriendEncounterSize)
        ? Number(object.maxFriendEncounterSize)
        : 0,
      profileStatsData: Array.isArray(object?.profileStatsData)
        ? object.profileStatsData.map((e: any) =>
            GameStatSaveGameData.fromJSON(e)
          )
        : [],
      bankInventoryCategoryList: Array.isArray(
        object?.bankInventoryCategoryList
      )
        ? object.bankInventoryCategoryList.map((e: any) =>
            InventoryCategorySaveData.fromJSON(e)
          )
        : [],
      twoPlayerSplitscreenLayout: isSet(object.twoPlayerSplitscreenLayout)
        ? Number(object.twoPlayerSplitscreenLayout)
        : 0,
      lostLootInventoryList: Array.isArray(object?.lostLootInventoryList)
        ? object.lostLootInventoryList.map((e: any) => bytesFromBase64(e))
        : [],
      npcMailItems: Array.isArray(object?.npcMailItems)
        ? object.npcMailItems.map((e: any) => OakMailItem.fromJSON(e))
        : [],
      mailGuids: Array.isArray(object?.mailGuids)
        ? object.mailGuids.map((e: any) => String(e))
        : [],
      unreadMailGuids: Array.isArray(object?.unreadMailGuids)
        ? object.unreadMailGuids.map((e: any) => String(e))
        : [],
      gearSoldByFriends: Array.isArray(object?.gearSoldByFriends)
        ? object.gearSoldByFriends.map((e: any) =>
            GearSoldByFriendData.fromJSON(e)
          )
        : [],
      profileSduList: Array.isArray(object?.profileSduList)
        ? object.profileSduList.map((e: any) => OakSDUSaveGameData.fromJSON(e))
        : [],
      unlockedCustomizations: Array.isArray(object?.unlockedCustomizations)
        ? object.unlockedCustomizations.map((e: any) =>
            OakCustomizationSaveGameData.fromJSON(e)
          )
        : [],
      unlockedInventoryCustomizationParts: Array.isArray(
        object?.unlockedInventoryCustomizationParts
      )
        ? object.unlockedInventoryCustomizationParts.map((e: any) =>
            OakInventoryCustomizationPartInfo.fromJSON(e)
          )
        : [],
      fixedInitialZonemapRotation: isSet(object.fixedInitialZonemapRotation)
        ? Boolean(object.fixedInitialZonemapRotation)
        : false,
      enableMouseAcceleration: isSet(object.enableMouseAcceleration)
        ? Boolean(object.enableMouseAcceleration)
        : false,
      enableGamepadInput: isSet(object.enableGamepadInput)
        ? Boolean(object.enableGamepadInput)
        : false,
      useClassicGamepadInput: isSet(object.useClassicGamepadInput)
        ? Boolean(object.useClassicGamepadInput)
        : false,
      masterVolume: isSet(object.masterVolume)
        ? Number(object.masterVolume)
        : 0,
      monitorDisplayType: isSet(object.monitorDisplayType)
        ? Number(object.monitorDisplayType)
        : 0,
      graphicsMode: isSet(object.graphicsMode)
        ? Number(object.graphicsMode)
        : 0,
      frameRateLimit: isSet(object.frameRateLimit)
        ? Number(object.frameRateLimit)
        : 0,
      baseVehicleFov: isSet(object.baseVehicleFov)
        ? Number(object.baseVehicleFov)
        : 0,
      graphicsQuality: isSet(object.graphicsQuality)
        ? Number(object.graphicsQuality)
        : 0,
      anisotropicFiltering: isSet(object.anisotropicFiltering)
        ? Number(object.anisotropicFiltering)
        : 0,
      shadowQuality: isSet(object.shadowQuality)
        ? Number(object.shadowQuality)
        : 0,
      displayPerformanceStats: isSet(object.displayPerformanceStats)
        ? Number(object.displayPerformanceStats)
        : 0,
      textureDetail: isSet(object.textureDetail)
        ? Number(object.textureDetail)
        : 0,
      drawDistance: isSet(object.drawDistance)
        ? Number(object.drawDistance)
        : 0,
      clutter: isSet(object.clutter) ? Number(object.clutter) : 0,
      tessellation: isSet(object.tessellation)
        ? Number(object.tessellation)
        : 0,
      foliage: isSet(object.foliage) ? Number(object.foliage) : 0,
      foliageShadows: isSet(object.foliageShadows)
        ? Boolean(object.foliageShadows)
        : false,
      planarReflections: isSet(object.planarReflections)
        ? Boolean(object.planarReflections)
        : false,
      volumetricFog: isSet(object.volumetricFog)
        ? Number(object.volumetricFog)
        : 0,
      screenSpaceReflections: isSet(object.screenSpaceReflections)
        ? Number(object.screenSpaceReflections)
        : 0,
      characterTextureDetail: isSet(object.characterTextureDetail)
        ? Number(object.characterTextureDetail)
        : 0,
      characterDetail: isSet(object.characterDetail)
        ? Number(object.characterDetail)
        : 0,
      ambientOcclusionQuality: isSet(object.ambientOcclusionQuality)
        ? Number(object.ambientOcclusionQuality)
        : 0,
      objectMotionBlur: isSet(object.objectMotionBlur)
        ? Boolean(object.objectMotionBlur)
        : false,
      lensFlare: isSet(object.lensFlare) ? Boolean(object.lensFlare) : false,
      combatNumberLongFormat: isSet(object.combatNumberLongFormat)
        ? Boolean(object.combatNumberLongFormat)
        : false,
      showMinimapLegendaries: isSet(object.showMinimapLegendaries)
        ? Boolean(object.showMinimapLegendaries)
        : false,
      usePlayerCallouts: isSet(object.usePlayerCallouts)
        ? Boolean(object.usePlayerCallouts)
        : false,
      friendEventNotificationLifetime: isSet(
        object.friendEventNotificationLifetime
      )
        ? Number(object.friendEventNotificationLifetime)
        : 0,
      friendEventNotificationFrequency: isSet(
        object.friendEventNotificationFrequency
      )
        ? Number(object.friendEventNotificationFrequency)
        : 0,
      tradeRequestReceptionType: isSet(object.tradeRequestReceptionType)
        ? Number(object.tradeRequestReceptionType)
        : 0,
      headBobScale: isSet(object.headBobScale)
        ? Number(object.headBobScale)
        : 0,
      hasResetConsoleFov: isSet(object.hasResetConsoleFov)
        ? Boolean(object.hasResetConsoleFov)
        : false,
      hasSeenFirstBoot: isSet(object.hasSeenFirstBoot)
        ? Boolean(object.hasSeenFirstBoot)
        : false,
      badassEventEnabled: isSet(object.badassEventEnabled)
        ? Boolean(object.badassEventEnabled)
        : false,
      pinataEventEnabled: isSet(object.pinataEventEnabled)
        ? Boolean(object.pinataEventEnabled)
        : false,
      minTimeBetweenBadassEvents: isSet(object.minTimeBetweenBadassEvents)
        ? Number(object.minTimeBetweenBadassEvents)
        : 0,
      disableSpatialAudio: isSet(object.disableSpatialAudio)
        ? Boolean(object.disableSpatialAudio)
        : false,
      subsCcSize: isSet(object.subsCcSize) ? Number(object.subsCcSize) : 0,
      ccSubsBackgroundOpacity: isSet(object.ccSubsBackgroundOpacity)
        ? Number(object.ccSubsBackgroundOpacity)
        : 0,
      walkingButtonScheme: isSet(object.walkingButtonScheme)
        ? Number(object.walkingButtonScheme)
        : 0,
      drivingButtonScheme: isSet(object.drivingButtonScheme)
        ? Number(object.drivingButtonScheme)
        : 0,
      glyphMode: isSet(object.glyphMode) ? Number(object.glyphMode) : 0,
      useMPH: isSet(object.useMPH) ? Boolean(object.useMPH) : false,
      registeredDownloadableEntitlements: Array.isArray(
        object?.registeredDownloadableEntitlements
      )
        ? object.registeredDownloadableEntitlements.map((e: any) =>
            RegisteredDownloadableEntitlements.fromJSON(e)
          )
        : [],
      seenNewsItems: Array.isArray(object?.seenNewsItems)
        ? object.seenNewsItems.map((e: any) => String(e))
        : [],
      autoCenteringEnabled: isSet(object.autoCenteringEnabled)
        ? Boolean(object.autoCenteringEnabled)
        : false,
      increasedChanceForSubscribers: isSet(object.increasedChanceForSubscribers)
        ? Boolean(object.increasedChanceForSubscribers)
        : false,
      rareChestEventEnabled: isSet(object.rareChestEventEnabled)
        ? Boolean(object.rareChestEventEnabled)
        : false,
      hudScaleMultiplier: isSet(object.hudScaleMultiplier)
        ? Number(object.hudScaleMultiplier)
        : 0,
      totalPlaytimeSeconds: isSet(object.totalPlaytimeSeconds)
        ? Number(object.totalPlaytimeSeconds)
        : 0,
      desiredCrossplayState: isSet(object.desiredCrossplayState)
        ? Number(object.desiredCrossplayState)
        : 0,
      desiredFriendSyncState: isSet(object.desiredFriendSyncState)
        ? Number(object.desiredFriendSyncState)
        : 0,
      needsShiftFirstBoot: isSet(object.needsShiftFirstBoot)
        ? Boolean(object.needsShiftFirstBoot)
        : false,
      recentlyMetPlayers: Array.isArray(object?.recentlyMetPlayers)
        ? object.recentlyMetPlayers.map((e: any) =>
            RecentlyMetPlayer.fromJSON(e)
          )
        : [],
      enableTriggerFeedback: isSet(object.enableTriggerFeedback)
        ? Boolean(object.enableTriggerFeedback)
        : false,
      cameraShakeScale: isSet(object.cameraShakeScale)
        ? Number(object.cameraShakeScale)
        : 0,
      playerPrestige: isSet(object.playerPrestige)
        ? PlayerPrestigeProfileData.fromJSON(object.playerPrestige)
        : undefined,
      needsShiftFirstBootPrimary: isSet(object.needsShiftFirstBootPrimary)
        ? Boolean(object.needsShiftFirstBootPrimary)
        : false,
      acceptedOfflineEulas: Array.isArray(object?.acceptedOfflineEulas)
        ? object.acceptedOfflineEulas.map((e: any) =>
            AcceptedOfflineEULA.fromJSON(e)
          )
        : [],
      overrideAudioLanguage: isSet(object.overrideAudioLanguage)
        ? String(object.overrideAudioLanguage)
        : "",
      bankInventoryList: Array.isArray(object?.bankInventoryList)
        ? object.bankInventoryList.map((e: any) =>
            OakInventoryItemSaveGameData.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: Profile): unknown {
    const obj: any = {};
    message.enableAimAssist !== undefined &&
      (obj.enableAimAssist = message.enableAimAssist);
    message.gamepadInvertLook !== undefined &&
      (obj.gamepadInvertLook = message.gamepadInvertLook);
    message.gamepadInvertTurn !== undefined &&
      (obj.gamepadInvertTurn = message.gamepadInvertTurn);
    message.gamepadInvertMove !== undefined &&
      (obj.gamepadInvertMove = message.gamepadInvertMove);
    message.gamepadInvertStrafe !== undefined &&
      (obj.gamepadInvertStrafe = message.gamepadInvertStrafe);
    message.enableVibration !== undefined &&
      (obj.enableVibration = message.enableVibration);
    message.invertMousePitch !== undefined &&
      (obj.invertMousePitch = message.invertMousePitch);
    message.enableMouseSmoothing !== undefined &&
      (obj.enableMouseSmoothing = message.enableMouseSmoothing);
    message.mouseScale !== undefined && (obj.mouseScale = message.mouseScale);
    message.showDamageNumbers !== undefined &&
      (obj.showDamageNumbers = message.showDamageNumbers);
    message.showDamageNumberIcons !== undefined &&
      (obj.showDamageNumberIcons = message.showDamageNumberIcons);
    message.enableTrainingMessages !== undefined &&
      (obj.enableTrainingMessages = message.enableTrainingMessages);
    message.showTextChat !== undefined &&
      (obj.showTextChat = message.showTextChat);
    message.centerCrosshair !== undefined &&
      (obj.centerCrosshair = message.centerCrosshair);
    message.toggleSprint !== undefined &&
      (obj.toggleSprint = message.toggleSprint);
    message.toggleCrouch !== undefined &&
      (obj.toggleCrouch = message.toggleCrouch);
    message.censorContent !== undefined &&
      (obj.censorContent = message.censorContent);
    message.musicVolume !== undefined &&
      (obj.musicVolume = message.musicVolume);
    message.soundEffectsVolume !== undefined &&
      (obj.soundEffectsVolume = message.soundEffectsVolume);
    message.voVolume !== undefined && (obj.voVolume = message.voVolume);
    message.voiceVolume !== undefined &&
      (obj.voiceVolume = message.voiceVolume);
    message.enableOptionalVo !== undefined &&
      (obj.enableOptionalVo = message.enableOptionalVo);
    message.pushToTalk !== undefined && (obj.pushToTalk = message.pushToTalk);
    message.enableControllerAudio !== undefined &&
      (obj.enableControllerAudio = message.enableControllerAudio);
    message.speakerAngleFront !== undefined &&
      (obj.speakerAngleFront = message.speakerAngleFront);
    message.speakerAngleSide !== undefined &&
      (obj.speakerAngleSide = message.speakerAngleSide);
    message.speakerAngleBack !== undefined &&
      (obj.speakerAngleBack = message.speakerAngleBack);
    message.speakerSetup !== undefined &&
      (obj.speakerSetup = Math.round(message.speakerSetup));
    message.muteAudioOnFocusLoss !== undefined &&
      (obj.muteAudioOnFocusLoss = message.muteAudioOnFocusLoss);
    if (message.challengeData) {
      obj.challengeData = message.challengeData.map((e) =>
        e ? ChallengeSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.challengeData = [];
    }
    message.defaultDeadZoneInnerUpdated !== undefined &&
      (obj.defaultDeadZoneInnerUpdated = message.defaultDeadZoneInnerUpdated);
    message.disableEventContent !== undefined &&
      (obj.disableEventContent = message.disableEventContent);
    message.hideStrictNatHelpDialog !== undefined &&
      (obj.hideStrictNatHelpDialog = message.hideStrictNatHelpDialog);
    message.playerInputBindings !== undefined &&
      (obj.playerInputBindings = message.playerInputBindings
        ? PlayerInputBindings.toJSON(message.playerInputBindings)
        : undefined);
    if (message.newsHashes) {
      obj.newsHashes = message.newsHashes.map((e) => Math.round(e));
    } else {
      obj.newsHashes = [];
    }
    message.lastUsedSavegameId !== undefined &&
      (obj.lastUsedSavegameId = Math.round(message.lastUsedSavegameId));
    message.gamepadHipSensitivityLevel !== undefined &&
      (obj.gamepadHipSensitivityLevel = Math.round(
        message.gamepadHipSensitivityLevel
      ));
    message.gamepadZoomedSensitivityLevel !== undefined &&
      (obj.gamepadZoomedSensitivityLevel = Math.round(
        message.gamepadZoomedSensitivityLevel
      ));
    message.gamepadVehicleSensitivityLevel !== undefined &&
      (obj.gamepadVehicleSensitivityLevel = Math.round(
        message.gamepadVehicleSensitivityLevel
      ));
    message.gamepadMovementDeadZoneX !== undefined &&
      (obj.gamepadMovementDeadZoneX = message.gamepadMovementDeadZoneX);
    message.gamepadMovementDeadZoneY !== undefined &&
      (obj.gamepadMovementDeadZoneY = message.gamepadMovementDeadZoneY);
    message.gamepadLookDeadZoneInnerX !== undefined &&
      (obj.gamepadLookDeadZoneInnerX = message.gamepadLookDeadZoneInnerX);
    message.gamepadLookDeadZoneOuterX !== undefined &&
      (obj.gamepadLookDeadZoneOuterX = message.gamepadLookDeadZoneOuterX);
    message.gamepadLookDeadZoneInnerY !== undefined &&
      (obj.gamepadLookDeadZoneInnerY = message.gamepadLookDeadZoneInnerY);
    message.gamepadLookDeadZoneOuterY !== undefined &&
      (obj.gamepadLookDeadZoneOuterY = message.gamepadLookDeadZoneOuterY);
    message.gamepadVehicleMovementDeadZoneX !== undefined &&
      (obj.gamepadVehicleMovementDeadZoneX =
        message.gamepadVehicleMovementDeadZoneX);
    message.gamepadVehicleMovementDeadZoneY !== undefined &&
      (obj.gamepadVehicleMovementDeadZoneY =
        message.gamepadVehicleMovementDeadZoneY);
    message.gamepadVehicleLookDeadZoneInnerX !== undefined &&
      (obj.gamepadVehicleLookDeadZoneInnerX =
        message.gamepadVehicleLookDeadZoneInnerX);
    message.gamepadVehicleLookDeadZoneOuterX !== undefined &&
      (obj.gamepadVehicleLookDeadZoneOuterX =
        message.gamepadVehicleLookDeadZoneOuterX);
    message.gamepadVehicleLookDeadZoneInnerY !== undefined &&
      (obj.gamepadVehicleLookDeadZoneInnerY =
        message.gamepadVehicleLookDeadZoneInnerY);
    message.gamepadVehicleLookDeadZoneOuterY !== undefined &&
      (obj.gamepadVehicleLookDeadZoneOuterY =
        message.gamepadVehicleLookDeadZoneOuterY);
    message.gamepadLeftDeadZoneInner !== undefined &&
      (obj.gamepadLeftDeadZoneInner = message.gamepadLeftDeadZoneInner);
    message.gamepadLeftDeadZoneOuter !== undefined &&
      (obj.gamepadLeftDeadZoneOuter = message.gamepadLeftDeadZoneOuter);
    message.gamepadRightDeadZoneInner !== undefined &&
      (obj.gamepadRightDeadZoneInner = message.gamepadRightDeadZoneInner);
    message.gamepadRightDeadZoneOuter !== undefined &&
      (obj.gamepadRightDeadZoneOuter = message.gamepadRightDeadZoneOuter);
    message.gamepadLookAxialDeadZoneScale !== undefined &&
      (obj.gamepadLookAxialDeadZoneScale =
        message.gamepadLookAxialDeadZoneScale);
    message.gamepadMoveAxialDeadZoneScale !== undefined &&
      (obj.gamepadMoveAxialDeadZoneScale =
        message.gamepadMoveAxialDeadZoneScale);
    message.gamepadUseAdvancedHipAimSettings !== undefined &&
      (obj.gamepadUseAdvancedHipAimSettings =
        message.gamepadUseAdvancedHipAimSettings);
    message.gamepadUseAdvancedZoomedAimSettings !== undefined &&
      (obj.gamepadUseAdvancedZoomedAimSettings =
        message.gamepadUseAdvancedZoomedAimSettings);
    message.gamepadUseAdvancedVehicleAimSettings !== undefined &&
      (obj.gamepadUseAdvancedVehicleAimSettings =
        message.gamepadUseAdvancedVehicleAimSettings);
    message.gamepadHipYawRate !== undefined &&
      (obj.gamepadHipYawRate = message.gamepadHipYawRate);
    message.gamepadHipPitchRate !== undefined &&
      (obj.gamepadHipPitchRate = message.gamepadHipPitchRate);
    message.gamepadHipExtraYaw !== undefined &&
      (obj.gamepadHipExtraYaw = message.gamepadHipExtraYaw);
    message.gamepadHipExtraPitch !== undefined &&
      (obj.gamepadHipExtraPitch = message.gamepadHipExtraPitch);
    message.gamepadHipRampUpTime !== undefined &&
      (obj.gamepadHipRampUpTime = message.gamepadHipRampUpTime);
    message.gamepadHipRampUpDelay !== undefined &&
      (obj.gamepadHipRampUpDelay = message.gamepadHipRampUpDelay);
    message.gamepadZoomedYawRate !== undefined &&
      (obj.gamepadZoomedYawRate = message.gamepadZoomedYawRate);
    message.gamepadZoomedPitchRate !== undefined &&
      (obj.gamepadZoomedPitchRate = message.gamepadZoomedPitchRate);
    message.gamepadZoomedExtraYaw !== undefined &&
      (obj.gamepadZoomedExtraYaw = message.gamepadZoomedExtraYaw);
    message.gamepadZoomedExtraPitch !== undefined &&
      (obj.gamepadZoomedExtraPitch = message.gamepadZoomedExtraPitch);
    message.gamepadZoomedRampUpTime !== undefined &&
      (obj.gamepadZoomedRampUpTime = message.gamepadZoomedRampUpTime);
    message.gamepadZoomedRampUpDelay !== undefined &&
      (obj.gamepadZoomedRampUpDelay = message.gamepadZoomedRampUpDelay);
    message.gamepadVehicleYawRate !== undefined &&
      (obj.gamepadVehicleYawRate = message.gamepadVehicleYawRate);
    message.gamepadVehiclePitchRate !== undefined &&
      (obj.gamepadVehiclePitchRate = message.gamepadVehiclePitchRate);
    message.gamepadVehicleExtraYaw !== undefined &&
      (obj.gamepadVehicleExtraYaw = message.gamepadVehicleExtraYaw);
    message.gamepadVehicleExtraPitch !== undefined &&
      (obj.gamepadVehicleExtraPitch = message.gamepadVehicleExtraPitch);
    message.gamepadVehicleRampUpTime !== undefined &&
      (obj.gamepadVehicleRampUpTime = message.gamepadVehicleRampUpTime);
    message.gamepadVehicleRampUpDelay !== undefined &&
      (obj.gamepadVehicleRampUpDelay = message.gamepadVehicleRampUpDelay);
    message.ironsightAimAssist !== undefined &&
      (obj.ironsightAimAssist = message.ironsightAimAssist);
    message.walkingJoystickScheme !== undefined &&
      (obj.walkingJoystickScheme = Math.round(message.walkingJoystickScheme));
    message.drivingJoystickScheme !== undefined &&
      (obj.drivingJoystickScheme = Math.round(message.drivingJoystickScheme));
    message.mouseAdsScale !== undefined &&
      (obj.mouseAdsScale = message.mouseAdsScale);
    message.mouseVehicleScale !== undefined &&
      (obj.mouseVehicleScale = message.mouseVehicleScale);
    message.mouseIronsightAimAssist !== undefined &&
      (obj.mouseIronsightAimAssist = message.mouseIronsightAimAssist);
    message.vehicleInputMode !== undefined &&
      (obj.vehicleInputMode = Math.round(message.vehicleInputMode));
    message.weaponAimToggle !== undefined &&
      (obj.weaponAimToggle = message.weaponAimToggle);
    message.mantleRequiresButton !== undefined &&
      (obj.mantleRequiresButton = message.mantleRequiresButton);
    message.fixedMinimapRotation !== undefined &&
      (obj.fixedMinimapRotation = message.fixedMinimapRotation);
    message.mapInvertPitch !== undefined &&
      (obj.mapInvertPitch = message.mapInvertPitch);
    message.mapInvertYaw !== undefined &&
      (obj.mapInvertYaw = message.mapInvertYaw);
    message.difficulty !== undefined &&
      (obj.difficulty = Math.round(message.difficulty));
    message.swapDualWieldControls !== undefined &&
      (obj.swapDualWieldControls = message.swapDualWieldControls);
    message.baseFov !== undefined && (obj.baseFov = message.baseFov);
    message.crosshairNeutralColorFrame !== undefined &&
      (obj.crosshairNeutralColorFrame = Math.round(
        message.crosshairNeutralColorFrame
      ));
    message.crosshairEnemyColorFrame !== undefined &&
      (obj.crosshairEnemyColorFrame = Math.round(
        message.crosshairEnemyColorFrame
      ));
    message.crosshairAllyColorFrame !== undefined &&
      (obj.crosshairAllyColorFrame = Math.round(
        message.crosshairAllyColorFrame
      ));
    message.enableSubtitles !== undefined &&
      (obj.enableSubtitles = message.enableSubtitles);
    message.enableClosedCaptions !== undefined &&
      (obj.enableClosedCaptions = message.enableClosedCaptions);
    message.lastStatusMenuPage !== undefined &&
      (obj.lastStatusMenuPage = message.lastStatusMenuPage);
    if (message.inventoryScreenLastFilter) {
      obj.inventoryScreenLastFilter = message.inventoryScreenLastFilter.map(
        (e) => (e ? OakProfileLastInventoryFilterInfo.toJSON(e) : undefined)
      );
    } else {
      obj.inventoryScreenLastFilter = [];
    }
    message.tutorialInfo !== undefined &&
      (obj.tutorialInfo = message.tutorialInfo
        ? OakProfileMenuTutorialInfo.toJSON(message.tutorialInfo)
        : undefined);
    message.defaultNetworkType !== undefined &&
      (obj.defaultNetworkType = Math.round(message.defaultNetworkType));
    message.defaultInviteType !== undefined &&
      (obj.defaultInviteType = Math.round(message.defaultInviteType));
    message.matchmakingRegion !== undefined &&
      (obj.matchmakingRegion = message.matchmakingRegion);
    message.streamingService !== undefined &&
      (obj.streamingService = Math.round(message.streamingService));
    message.maxCachedFriendEvents !== undefined &&
      (obj.maxCachedFriendEvents = Math.round(message.maxCachedFriendEvents));
    message.maxCachedFriendStatuses !== undefined &&
      (obj.maxCachedFriendStatuses = Math.round(
        message.maxCachedFriendStatuses
      ));
    if (message.friendEvents) {
      obj.friendEvents = message.friendEvents.map((e) => e);
    } else {
      obj.friendEvents = [];
    }
    if (message.friendStatuses) {
      obj.friendStatuses = message.friendStatuses.map((e) => e);
    } else {
      obj.friendStatuses = [];
    }
    message.lastWhisperFetchEventsTime !== undefined &&
      (obj.lastWhisperFetchEventsTime = Math.round(
        message.lastWhisperFetchEventsTime
      ));
    message.lastWhisperFetchStatusesTime !== undefined &&
      (obj.lastWhisperFetchStatusesTime = Math.round(
        message.lastWhisperFetchStatusesTime
      ));
    if (message.friendEncounters) {
      obj.friendEncounters = message.friendEncounters.map((e) =>
        e ? Profile_FriendEncountersEntry.toJSON(e) : undefined
      );
    } else {
      obj.friendEncounters = [];
    }
    message.maxFriendEncounterSize !== undefined &&
      (obj.maxFriendEncounterSize = Math.round(message.maxFriendEncounterSize));
    if (message.profileStatsData) {
      obj.profileStatsData = message.profileStatsData.map((e) =>
        e ? GameStatSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.profileStatsData = [];
    }
    if (message.bankInventoryCategoryList) {
      obj.bankInventoryCategoryList = message.bankInventoryCategoryList.map(
        (e) => (e ? InventoryCategorySaveData.toJSON(e) : undefined)
      );
    } else {
      obj.bankInventoryCategoryList = [];
    }
    message.twoPlayerSplitscreenLayout !== undefined &&
      (obj.twoPlayerSplitscreenLayout = Math.round(
        message.twoPlayerSplitscreenLayout
      ));
    if (message.lostLootInventoryList) {
      obj.lostLootInventoryList = message.lostLootInventoryList.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      );
    } else {
      obj.lostLootInventoryList = [];
    }
    if (message.npcMailItems) {
      obj.npcMailItems = message.npcMailItems.map((e) =>
        e ? OakMailItem.toJSON(e) : undefined
      );
    } else {
      obj.npcMailItems = [];
    }
    if (message.mailGuids) {
      obj.mailGuids = message.mailGuids.map((e) => e);
    } else {
      obj.mailGuids = [];
    }
    if (message.unreadMailGuids) {
      obj.unreadMailGuids = message.unreadMailGuids.map((e) => e);
    } else {
      obj.unreadMailGuids = [];
    }
    if (message.gearSoldByFriends) {
      obj.gearSoldByFriends = message.gearSoldByFriends.map((e) =>
        e ? GearSoldByFriendData.toJSON(e) : undefined
      );
    } else {
      obj.gearSoldByFriends = [];
    }
    if (message.profileSduList) {
      obj.profileSduList = message.profileSduList.map((e) =>
        e ? OakSDUSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.profileSduList = [];
    }
    if (message.unlockedCustomizations) {
      obj.unlockedCustomizations = message.unlockedCustomizations.map((e) =>
        e ? OakCustomizationSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.unlockedCustomizations = [];
    }
    if (message.unlockedInventoryCustomizationParts) {
      obj.unlockedInventoryCustomizationParts =
        message.unlockedInventoryCustomizationParts.map((e) =>
          e ? OakInventoryCustomizationPartInfo.toJSON(e) : undefined
        );
    } else {
      obj.unlockedInventoryCustomizationParts = [];
    }
    message.fixedInitialZonemapRotation !== undefined &&
      (obj.fixedInitialZonemapRotation = message.fixedInitialZonemapRotation);
    message.enableMouseAcceleration !== undefined &&
      (obj.enableMouseAcceleration = message.enableMouseAcceleration);
    message.enableGamepadInput !== undefined &&
      (obj.enableGamepadInput = message.enableGamepadInput);
    message.useClassicGamepadInput !== undefined &&
      (obj.useClassicGamepadInput = message.useClassicGamepadInput);
    message.masterVolume !== undefined &&
      (obj.masterVolume = message.masterVolume);
    message.monitorDisplayType !== undefined &&
      (obj.monitorDisplayType = Math.round(message.monitorDisplayType));
    message.graphicsMode !== undefined &&
      (obj.graphicsMode = Math.round(message.graphicsMode));
    message.frameRateLimit !== undefined &&
      (obj.frameRateLimit = Math.round(message.frameRateLimit));
    message.baseVehicleFov !== undefined &&
      (obj.baseVehicleFov = message.baseVehicleFov);
    message.graphicsQuality !== undefined &&
      (obj.graphicsQuality = Math.round(message.graphicsQuality));
    message.anisotropicFiltering !== undefined &&
      (obj.anisotropicFiltering = Math.round(message.anisotropicFiltering));
    message.shadowQuality !== undefined &&
      (obj.shadowQuality = Math.round(message.shadowQuality));
    message.displayPerformanceStats !== undefined &&
      (obj.displayPerformanceStats = Math.round(
        message.displayPerformanceStats
      ));
    message.textureDetail !== undefined &&
      (obj.textureDetail = Math.round(message.textureDetail));
    message.drawDistance !== undefined &&
      (obj.drawDistance = Math.round(message.drawDistance));
    message.clutter !== undefined &&
      (obj.clutter = Math.round(message.clutter));
    message.tessellation !== undefined &&
      (obj.tessellation = Math.round(message.tessellation));
    message.foliage !== undefined &&
      (obj.foliage = Math.round(message.foliage));
    message.foliageShadows !== undefined &&
      (obj.foliageShadows = message.foliageShadows);
    message.planarReflections !== undefined &&
      (obj.planarReflections = message.planarReflections);
    message.volumetricFog !== undefined &&
      (obj.volumetricFog = Math.round(message.volumetricFog));
    message.screenSpaceReflections !== undefined &&
      (obj.screenSpaceReflections = Math.round(message.screenSpaceReflections));
    message.characterTextureDetail !== undefined &&
      (obj.characterTextureDetail = Math.round(message.characterTextureDetail));
    message.characterDetail !== undefined &&
      (obj.characterDetail = Math.round(message.characterDetail));
    message.ambientOcclusionQuality !== undefined &&
      (obj.ambientOcclusionQuality = Math.round(
        message.ambientOcclusionQuality
      ));
    message.objectMotionBlur !== undefined &&
      (obj.objectMotionBlur = message.objectMotionBlur);
    message.lensFlare !== undefined && (obj.lensFlare = message.lensFlare);
    message.combatNumberLongFormat !== undefined &&
      (obj.combatNumberLongFormat = message.combatNumberLongFormat);
    message.showMinimapLegendaries !== undefined &&
      (obj.showMinimapLegendaries = message.showMinimapLegendaries);
    message.usePlayerCallouts !== undefined &&
      (obj.usePlayerCallouts = message.usePlayerCallouts);
    message.friendEventNotificationLifetime !== undefined &&
      (obj.friendEventNotificationLifetime = Math.round(
        message.friendEventNotificationLifetime
      ));
    message.friendEventNotificationFrequency !== undefined &&
      (obj.friendEventNotificationFrequency = Math.round(
        message.friendEventNotificationFrequency
      ));
    message.tradeRequestReceptionType !== undefined &&
      (obj.tradeRequestReceptionType = Math.round(
        message.tradeRequestReceptionType
      ));
    message.headBobScale !== undefined &&
      (obj.headBobScale = message.headBobScale);
    message.hasResetConsoleFov !== undefined &&
      (obj.hasResetConsoleFov = message.hasResetConsoleFov);
    message.hasSeenFirstBoot !== undefined &&
      (obj.hasSeenFirstBoot = message.hasSeenFirstBoot);
    message.badassEventEnabled !== undefined &&
      (obj.badassEventEnabled = message.badassEventEnabled);
    message.pinataEventEnabled !== undefined &&
      (obj.pinataEventEnabled = message.pinataEventEnabled);
    message.minTimeBetweenBadassEvents !== undefined &&
      (obj.minTimeBetweenBadassEvents = Math.round(
        message.minTimeBetweenBadassEvents
      ));
    message.disableSpatialAudio !== undefined &&
      (obj.disableSpatialAudio = message.disableSpatialAudio);
    message.subsCcSize !== undefined && (obj.subsCcSize = message.subsCcSize);
    message.ccSubsBackgroundOpacity !== undefined &&
      (obj.ccSubsBackgroundOpacity = message.ccSubsBackgroundOpacity);
    message.walkingButtonScheme !== undefined &&
      (obj.walkingButtonScheme = Math.round(message.walkingButtonScheme));
    message.drivingButtonScheme !== undefined &&
      (obj.drivingButtonScheme = Math.round(message.drivingButtonScheme));
    message.glyphMode !== undefined &&
      (obj.glyphMode = Math.round(message.glyphMode));
    message.useMPH !== undefined && (obj.useMPH = message.useMPH);
    if (message.registeredDownloadableEntitlements) {
      obj.registeredDownloadableEntitlements =
        message.registeredDownloadableEntitlements.map((e) =>
          e ? RegisteredDownloadableEntitlements.toJSON(e) : undefined
        );
    } else {
      obj.registeredDownloadableEntitlements = [];
    }
    if (message.seenNewsItems) {
      obj.seenNewsItems = message.seenNewsItems.map((e) => e);
    } else {
      obj.seenNewsItems = [];
    }
    message.autoCenteringEnabled !== undefined &&
      (obj.autoCenteringEnabled = message.autoCenteringEnabled);
    message.increasedChanceForSubscribers !== undefined &&
      (obj.increasedChanceForSubscribers =
        message.increasedChanceForSubscribers);
    message.rareChestEventEnabled !== undefined &&
      (obj.rareChestEventEnabled = message.rareChestEventEnabled);
    message.hudScaleMultiplier !== undefined &&
      (obj.hudScaleMultiplier = message.hudScaleMultiplier);
    message.totalPlaytimeSeconds !== undefined &&
      (obj.totalPlaytimeSeconds = Math.round(message.totalPlaytimeSeconds));
    message.desiredCrossplayState !== undefined &&
      (obj.desiredCrossplayState = Math.round(message.desiredCrossplayState));
    message.desiredFriendSyncState !== undefined &&
      (obj.desiredFriendSyncState = Math.round(message.desiredFriendSyncState));
    message.needsShiftFirstBoot !== undefined &&
      (obj.needsShiftFirstBoot = message.needsShiftFirstBoot);
    if (message.recentlyMetPlayers) {
      obj.recentlyMetPlayers = message.recentlyMetPlayers.map((e) =>
        e ? RecentlyMetPlayer.toJSON(e) : undefined
      );
    } else {
      obj.recentlyMetPlayers = [];
    }
    message.enableTriggerFeedback !== undefined &&
      (obj.enableTriggerFeedback = message.enableTriggerFeedback);
    message.cameraShakeScale !== undefined &&
      (obj.cameraShakeScale = message.cameraShakeScale);
    message.playerPrestige !== undefined &&
      (obj.playerPrestige = message.playerPrestige
        ? PlayerPrestigeProfileData.toJSON(message.playerPrestige)
        : undefined);
    message.needsShiftFirstBootPrimary !== undefined &&
      (obj.needsShiftFirstBootPrimary = message.needsShiftFirstBootPrimary);
    if (message.acceptedOfflineEulas) {
      obj.acceptedOfflineEulas = message.acceptedOfflineEulas.map((e) =>
        e ? AcceptedOfflineEULA.toJSON(e) : undefined
      );
    } else {
      obj.acceptedOfflineEulas = [];
    }
    message.overrideAudioLanguage !== undefined &&
      (obj.overrideAudioLanguage = message.overrideAudioLanguage);
    if (message.bankInventoryList) {
      obj.bankInventoryList = message.bankInventoryList.map((e) =>
        e ? OakInventoryItemSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.bankInventoryList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Profile>, I>>(object: I): Profile {
    const message = createBaseProfile();
    message.enableAimAssist = object.enableAimAssist ?? false;
    message.gamepadInvertLook = object.gamepadInvertLook ?? false;
    message.gamepadInvertTurn = object.gamepadInvertTurn ?? false;
    message.gamepadInvertMove = object.gamepadInvertMove ?? false;
    message.gamepadInvertStrafe = object.gamepadInvertStrafe ?? false;
    message.enableVibration = object.enableVibration ?? false;
    message.invertMousePitch = object.invertMousePitch ?? false;
    message.enableMouseSmoothing = object.enableMouseSmoothing ?? false;
    message.mouseScale = object.mouseScale ?? 0;
    message.showDamageNumbers = object.showDamageNumbers ?? false;
    message.showDamageNumberIcons = object.showDamageNumberIcons ?? false;
    message.enableTrainingMessages = object.enableTrainingMessages ?? false;
    message.showTextChat = object.showTextChat ?? false;
    message.centerCrosshair = object.centerCrosshair ?? false;
    message.toggleSprint = object.toggleSprint ?? false;
    message.toggleCrouch = object.toggleCrouch ?? false;
    message.censorContent = object.censorContent ?? false;
    message.musicVolume = object.musicVolume ?? 0;
    message.soundEffectsVolume = object.soundEffectsVolume ?? 0;
    message.voVolume = object.voVolume ?? 0;
    message.voiceVolume = object.voiceVolume ?? 0;
    message.enableOptionalVo = object.enableOptionalVo ?? false;
    message.pushToTalk = object.pushToTalk ?? false;
    message.enableControllerAudio = object.enableControllerAudio ?? false;
    message.speakerAngleFront = object.speakerAngleFront ?? 0;
    message.speakerAngleSide = object.speakerAngleSide ?? 0;
    message.speakerAngleBack = object.speakerAngleBack ?? 0;
    message.speakerSetup = object.speakerSetup ?? 0;
    message.muteAudioOnFocusLoss = object.muteAudioOnFocusLoss ?? false;
    message.challengeData =
      object.challengeData?.map((e) => ChallengeSaveGameData.fromPartial(e)) ||
      [];
    message.defaultDeadZoneInnerUpdated =
      object.defaultDeadZoneInnerUpdated ?? false;
    message.disableEventContent = object.disableEventContent ?? false;
    message.hideStrictNatHelpDialog = object.hideStrictNatHelpDialog ?? false;
    message.playerInputBindings =
      object.playerInputBindings !== undefined &&
      object.playerInputBindings !== null
        ? PlayerInputBindings.fromPartial(object.playerInputBindings)
        : undefined;
    message.newsHashes = object.newsHashes?.map((e) => e) || [];
    message.lastUsedSavegameId = object.lastUsedSavegameId ?? 0;
    message.gamepadHipSensitivityLevel = object.gamepadHipSensitivityLevel ?? 0;
    message.gamepadZoomedSensitivityLevel =
      object.gamepadZoomedSensitivityLevel ?? 0;
    message.gamepadVehicleSensitivityLevel =
      object.gamepadVehicleSensitivityLevel ?? 0;
    message.gamepadMovementDeadZoneX = object.gamepadMovementDeadZoneX ?? 0;
    message.gamepadMovementDeadZoneY = object.gamepadMovementDeadZoneY ?? 0;
    message.gamepadLookDeadZoneInnerX = object.gamepadLookDeadZoneInnerX ?? 0;
    message.gamepadLookDeadZoneOuterX = object.gamepadLookDeadZoneOuterX ?? 0;
    message.gamepadLookDeadZoneInnerY = object.gamepadLookDeadZoneInnerY ?? 0;
    message.gamepadLookDeadZoneOuterY = object.gamepadLookDeadZoneOuterY ?? 0;
    message.gamepadVehicleMovementDeadZoneX =
      object.gamepadVehicleMovementDeadZoneX ?? 0;
    message.gamepadVehicleMovementDeadZoneY =
      object.gamepadVehicleMovementDeadZoneY ?? 0;
    message.gamepadVehicleLookDeadZoneInnerX =
      object.gamepadVehicleLookDeadZoneInnerX ?? 0;
    message.gamepadVehicleLookDeadZoneOuterX =
      object.gamepadVehicleLookDeadZoneOuterX ?? 0;
    message.gamepadVehicleLookDeadZoneInnerY =
      object.gamepadVehicleLookDeadZoneInnerY ?? 0;
    message.gamepadVehicleLookDeadZoneOuterY =
      object.gamepadVehicleLookDeadZoneOuterY ?? 0;
    message.gamepadLeftDeadZoneInner = object.gamepadLeftDeadZoneInner ?? 0;
    message.gamepadLeftDeadZoneOuter = object.gamepadLeftDeadZoneOuter ?? 0;
    message.gamepadRightDeadZoneInner = object.gamepadRightDeadZoneInner ?? 0;
    message.gamepadRightDeadZoneOuter = object.gamepadRightDeadZoneOuter ?? 0;
    message.gamepadLookAxialDeadZoneScale =
      object.gamepadLookAxialDeadZoneScale ?? 0;
    message.gamepadMoveAxialDeadZoneScale =
      object.gamepadMoveAxialDeadZoneScale ?? 0;
    message.gamepadUseAdvancedHipAimSettings =
      object.gamepadUseAdvancedHipAimSettings ?? false;
    message.gamepadUseAdvancedZoomedAimSettings =
      object.gamepadUseAdvancedZoomedAimSettings ?? false;
    message.gamepadUseAdvancedVehicleAimSettings =
      object.gamepadUseAdvancedVehicleAimSettings ?? false;
    message.gamepadHipYawRate = object.gamepadHipYawRate ?? 0;
    message.gamepadHipPitchRate = object.gamepadHipPitchRate ?? 0;
    message.gamepadHipExtraYaw = object.gamepadHipExtraYaw ?? 0;
    message.gamepadHipExtraPitch = object.gamepadHipExtraPitch ?? 0;
    message.gamepadHipRampUpTime = object.gamepadHipRampUpTime ?? 0;
    message.gamepadHipRampUpDelay = object.gamepadHipRampUpDelay ?? 0;
    message.gamepadZoomedYawRate = object.gamepadZoomedYawRate ?? 0;
    message.gamepadZoomedPitchRate = object.gamepadZoomedPitchRate ?? 0;
    message.gamepadZoomedExtraYaw = object.gamepadZoomedExtraYaw ?? 0;
    message.gamepadZoomedExtraPitch = object.gamepadZoomedExtraPitch ?? 0;
    message.gamepadZoomedRampUpTime = object.gamepadZoomedRampUpTime ?? 0;
    message.gamepadZoomedRampUpDelay = object.gamepadZoomedRampUpDelay ?? 0;
    message.gamepadVehicleYawRate = object.gamepadVehicleYawRate ?? 0;
    message.gamepadVehiclePitchRate = object.gamepadVehiclePitchRate ?? 0;
    message.gamepadVehicleExtraYaw = object.gamepadVehicleExtraYaw ?? 0;
    message.gamepadVehicleExtraPitch = object.gamepadVehicleExtraPitch ?? 0;
    message.gamepadVehicleRampUpTime = object.gamepadVehicleRampUpTime ?? 0;
    message.gamepadVehicleRampUpDelay = object.gamepadVehicleRampUpDelay ?? 0;
    message.ironsightAimAssist = object.ironsightAimAssist ?? false;
    message.walkingJoystickScheme = object.walkingJoystickScheme ?? 0;
    message.drivingJoystickScheme = object.drivingJoystickScheme ?? 0;
    message.mouseAdsScale = object.mouseAdsScale ?? 0;
    message.mouseVehicleScale = object.mouseVehicleScale ?? 0;
    message.mouseIronsightAimAssist = object.mouseIronsightAimAssist ?? false;
    message.vehicleInputMode = object.vehicleInputMode ?? 0;
    message.weaponAimToggle = object.weaponAimToggle ?? false;
    message.mantleRequiresButton = object.mantleRequiresButton ?? false;
    message.fixedMinimapRotation = object.fixedMinimapRotation ?? false;
    message.mapInvertPitch = object.mapInvertPitch ?? false;
    message.mapInvertYaw = object.mapInvertYaw ?? false;
    message.difficulty = object.difficulty ?? 0;
    message.swapDualWieldControls = object.swapDualWieldControls ?? false;
    message.baseFov = object.baseFov ?? 0;
    message.crosshairNeutralColorFrame = object.crosshairNeutralColorFrame ?? 0;
    message.crosshairEnemyColorFrame = object.crosshairEnemyColorFrame ?? 0;
    message.crosshairAllyColorFrame = object.crosshairAllyColorFrame ?? 0;
    message.enableSubtitles = object.enableSubtitles ?? false;
    message.enableClosedCaptions = object.enableClosedCaptions ?? false;
    message.lastStatusMenuPage = object.lastStatusMenuPage ?? "";
    message.inventoryScreenLastFilter =
      object.inventoryScreenLastFilter?.map((e) =>
        OakProfileLastInventoryFilterInfo.fromPartial(e)
      ) || [];
    message.tutorialInfo =
      object.tutorialInfo !== undefined && object.tutorialInfo !== null
        ? OakProfileMenuTutorialInfo.fromPartial(object.tutorialInfo)
        : undefined;
    message.defaultNetworkType = object.defaultNetworkType ?? 0;
    message.defaultInviteType = object.defaultInviteType ?? 0;
    message.matchmakingRegion = object.matchmakingRegion ?? "";
    message.streamingService = object.streamingService ?? 0;
    message.maxCachedFriendEvents = object.maxCachedFriendEvents ?? 0;
    message.maxCachedFriendStatuses = object.maxCachedFriendStatuses ?? 0;
    message.friendEvents = object.friendEvents?.map((e) => e) || [];
    message.friendStatuses = object.friendStatuses?.map((e) => e) || [];
    message.lastWhisperFetchEventsTime = object.lastWhisperFetchEventsTime ?? 0;
    message.lastWhisperFetchStatusesTime =
      object.lastWhisperFetchStatusesTime ?? 0;
    message.friendEncounters =
      object.friendEncounters?.map((e) =>
        Profile_FriendEncountersEntry.fromPartial(e)
      ) || [];
    message.maxFriendEncounterSize = object.maxFriendEncounterSize ?? 0;
    message.profileStatsData =
      object.profileStatsData?.map((e) =>
        GameStatSaveGameData.fromPartial(e)
      ) || [];
    message.bankInventoryCategoryList =
      object.bankInventoryCategoryList?.map((e) =>
        InventoryCategorySaveData.fromPartial(e)
      ) || [];
    message.twoPlayerSplitscreenLayout = object.twoPlayerSplitscreenLayout ?? 0;
    message.lostLootInventoryList =
      object.lostLootInventoryList?.map((e) => e) || [];
    message.npcMailItems =
      object.npcMailItems?.map((e) => OakMailItem.fromPartial(e)) || [];
    message.mailGuids = object.mailGuids?.map((e) => e) || [];
    message.unreadMailGuids = object.unreadMailGuids?.map((e) => e) || [];
    message.gearSoldByFriends =
      object.gearSoldByFriends?.map((e) =>
        GearSoldByFriendData.fromPartial(e)
      ) || [];
    message.profileSduList =
      object.profileSduList?.map((e) => OakSDUSaveGameData.fromPartial(e)) ||
      [];
    message.unlockedCustomizations =
      object.unlockedCustomizations?.map((e) =>
        OakCustomizationSaveGameData.fromPartial(e)
      ) || [];
    message.unlockedInventoryCustomizationParts =
      object.unlockedInventoryCustomizationParts?.map((e) =>
        OakInventoryCustomizationPartInfo.fromPartial(e)
      ) || [];
    message.fixedInitialZonemapRotation =
      object.fixedInitialZonemapRotation ?? false;
    message.enableMouseAcceleration = object.enableMouseAcceleration ?? false;
    message.enableGamepadInput = object.enableGamepadInput ?? false;
    message.useClassicGamepadInput = object.useClassicGamepadInput ?? false;
    message.masterVolume = object.masterVolume ?? 0;
    message.monitorDisplayType = object.monitorDisplayType ?? 0;
    message.graphicsMode = object.graphicsMode ?? 0;
    message.frameRateLimit = object.frameRateLimit ?? 0;
    message.baseVehicleFov = object.baseVehicleFov ?? 0;
    message.graphicsQuality = object.graphicsQuality ?? 0;
    message.anisotropicFiltering = object.anisotropicFiltering ?? 0;
    message.shadowQuality = object.shadowQuality ?? 0;
    message.displayPerformanceStats = object.displayPerformanceStats ?? 0;
    message.textureDetail = object.textureDetail ?? 0;
    message.drawDistance = object.drawDistance ?? 0;
    message.clutter = object.clutter ?? 0;
    message.tessellation = object.tessellation ?? 0;
    message.foliage = object.foliage ?? 0;
    message.foliageShadows = object.foliageShadows ?? false;
    message.planarReflections = object.planarReflections ?? false;
    message.volumetricFog = object.volumetricFog ?? 0;
    message.screenSpaceReflections = object.screenSpaceReflections ?? 0;
    message.characterTextureDetail = object.characterTextureDetail ?? 0;
    message.characterDetail = object.characterDetail ?? 0;
    message.ambientOcclusionQuality = object.ambientOcclusionQuality ?? 0;
    message.objectMotionBlur = object.objectMotionBlur ?? false;
    message.lensFlare = object.lensFlare ?? false;
    message.combatNumberLongFormat = object.combatNumberLongFormat ?? false;
    message.showMinimapLegendaries = object.showMinimapLegendaries ?? false;
    message.usePlayerCallouts = object.usePlayerCallouts ?? false;
    message.friendEventNotificationLifetime =
      object.friendEventNotificationLifetime ?? 0;
    message.friendEventNotificationFrequency =
      object.friendEventNotificationFrequency ?? 0;
    message.tradeRequestReceptionType = object.tradeRequestReceptionType ?? 0;
    message.headBobScale = object.headBobScale ?? 0;
    message.hasResetConsoleFov = object.hasResetConsoleFov ?? false;
    message.hasSeenFirstBoot = object.hasSeenFirstBoot ?? false;
    message.badassEventEnabled = object.badassEventEnabled ?? false;
    message.pinataEventEnabled = object.pinataEventEnabled ?? false;
    message.minTimeBetweenBadassEvents = object.minTimeBetweenBadassEvents ?? 0;
    message.disableSpatialAudio = object.disableSpatialAudio ?? false;
    message.subsCcSize = object.subsCcSize ?? 0;
    message.ccSubsBackgroundOpacity = object.ccSubsBackgroundOpacity ?? 0;
    message.walkingButtonScheme = object.walkingButtonScheme ?? 0;
    message.drivingButtonScheme = object.drivingButtonScheme ?? 0;
    message.glyphMode = object.glyphMode ?? 0;
    message.useMPH = object.useMPH ?? false;
    message.registeredDownloadableEntitlements =
      object.registeredDownloadableEntitlements?.map((e) =>
        RegisteredDownloadableEntitlements.fromPartial(e)
      ) || [];
    message.seenNewsItems = object.seenNewsItems?.map((e) => e) || [];
    message.autoCenteringEnabled = object.autoCenteringEnabled ?? false;
    message.increasedChanceForSubscribers =
      object.increasedChanceForSubscribers ?? false;
    message.rareChestEventEnabled = object.rareChestEventEnabled ?? false;
    message.hudScaleMultiplier = object.hudScaleMultiplier ?? 0;
    message.totalPlaytimeSeconds = object.totalPlaytimeSeconds ?? 0;
    message.desiredCrossplayState = object.desiredCrossplayState ?? 0;
    message.desiredFriendSyncState = object.desiredFriendSyncState ?? 0;
    message.needsShiftFirstBoot = object.needsShiftFirstBoot ?? false;
    message.recentlyMetPlayers =
      object.recentlyMetPlayers?.map((e) => RecentlyMetPlayer.fromPartial(e)) ||
      [];
    message.enableTriggerFeedback = object.enableTriggerFeedback ?? false;
    message.cameraShakeScale = object.cameraShakeScale ?? 0;
    message.playerPrestige =
      object.playerPrestige !== undefined && object.playerPrestige !== null
        ? PlayerPrestigeProfileData.fromPartial(object.playerPrestige)
        : undefined;
    message.needsShiftFirstBootPrimary =
      object.needsShiftFirstBootPrimary ?? false;
    message.acceptedOfflineEulas =
      object.acceptedOfflineEulas?.map((e) =>
        AcceptedOfflineEULA.fromPartial(e)
      ) || [];
    message.overrideAudioLanguage = object.overrideAudioLanguage ?? "";
    message.bankInventoryList =
      object.bankInventoryList?.map((e) =>
        OakInventoryItemSaveGameData.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseProfile_FriendEncountersEntry(): Profile_FriendEncountersEntry {
  return { key: "", value: undefined };
}

export const Profile_FriendEncountersEntry = {
  encode(
    message: Profile_FriendEncountersEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== undefined) {
      OakFriendEncounterData.encode(
        message.value,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Profile_FriendEncountersEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProfile_FriendEncountersEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = OakFriendEncounterData.decode(
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

  fromJSON(object: any): Profile_FriendEncountersEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value)
        ? OakFriendEncounterData.fromJSON(object.value)
        : undefined,
    };
  },

  toJSON(message: Profile_FriendEncountersEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = message.value
        ? OakFriendEncounterData.toJSON(message.value)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Profile_FriendEncountersEntry>, I>>(
    object: I
  ): Profile_FriendEncountersEntry {
    const message = createBaseProfile_FriendEncountersEntry();
    message.key = object.key ?? "";
    message.value =
      object.value !== undefined && object.value !== null
        ? OakFriendEncounterData.fromPartial(object.value)
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
