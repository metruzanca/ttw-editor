/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  Vec3,
  GameStatSaveGameData,
  OakMailItem,
  OakSDUSaveGameData,
  OakCustomizationSaveGameData,
  OakInventoryCustomizationPartInfo,
  ChallengeSaveGameData,
  OakInventoryItemSaveGameData,
  InventoryCategorySaveData,
  RegisteredDownloadableEntitlements,
  OakProfileCustomizationLinkData,
} from "./OakShared";

export const protobufPackage = "OakSave";

export interface PlayerClassSaveGameData {
  playerClassPath: string;
  dlcPackageId: number;
}

export interface ResourcePoolSavegameData {
  amount: number;
  resourcePath: string;
}

export interface RegionSaveGameData {
  gameStage: number;
  playThroughIdx: number;
  regionPath: string;
  dlcPackageId: number;
}

export interface EquippedInventorySaveGameData {
  inventoryListIndex: number;
  enabled: boolean;
  slotDataPath: string;
}

export interface OakAbilityTreeItemSaveGameData {
  itemAssetPath: string;
  points: number;
  maxPoints: number;
  treeIdentifier: number;
}

export interface OakAbilitySlotSaveGameData {
  abilityClassPath: string;
  slotAssetPath: string;
}

export interface OakActionAbilityAugmentSaveGameData {
  actionAbilityClassPath: string;
  slotAssetPath: string;
  augmentAssetPath: string;
}

export interface OakActionAbilityAugmentConfigurationSaveGameData {
  abilityClassPath: string;
  augmentAssetPath: string;
  modSlotAssetPath: string;
  modAssetPath: string;
}

export interface OakDualClassSaveGameData {
  primaryBranchPath: string;
  unlockedSecondaryBranchPaths: string[];
  slottedSecondaryBranchPath: string;
  unlockedClassFeatures: boolean;
  unlockedInitialSecondaryClass: boolean;
  unlockedSecondaryClassSwapping: boolean;
}

export interface OakPlayerAbilitySaveGameData {
  abilityPoints: number;
  treeItemList: OakAbilityTreeItemSaveGameData[];
  abilitySlotList: OakAbilitySlotSaveGameData[];
  augmentSlotList: OakActionAbilityAugmentSaveGameData[];
  augmentConfigurationList: OakActionAbilityAugmentConfigurationSaveGameData[];
  treeGrade: number;
  dualClassSaveData: OakDualClassSaveGameData | undefined;
  respecCount: number;
}

export interface MissionStatusPlayerSaveGameData {
  status: MissionStatusPlayerSaveGameData_MissionState;
  hasBeenViewedInLog: boolean;
  objectivesProgress: number[];
  missionClassPath: string;
  activeObjectiveSetPath: string;
  dlcPackageId: number;
  kickoffPlayed: boolean;
}

export enum MissionStatusPlayerSaveGameData_MissionState {
  MS_NotStarted = 0,
  MS_Active = 1,
  MS_Complete = 2,
  MS_Failed = 3,
  MS_Unknown = 4,
  UNRECOGNIZED = -1,
}

export function missionStatusPlayerSaveGameData_MissionStateFromJSON(
  object: any
): MissionStatusPlayerSaveGameData_MissionState {
  switch (object) {
    case 0:
    case "MS_NotStarted":
      return MissionStatusPlayerSaveGameData_MissionState.MS_NotStarted;
    case 1:
    case "MS_Active":
      return MissionStatusPlayerSaveGameData_MissionState.MS_Active;
    case 2:
    case "MS_Complete":
      return MissionStatusPlayerSaveGameData_MissionState.MS_Complete;
    case 3:
    case "MS_Failed":
      return MissionStatusPlayerSaveGameData_MissionState.MS_Failed;
    case 4:
    case "MS_Unknown":
      return MissionStatusPlayerSaveGameData_MissionState.MS_Unknown;
    case -1:
    case "UNRECOGNIZED":
    default:
      return MissionStatusPlayerSaveGameData_MissionState.UNRECOGNIZED;
  }
}

export function missionStatusPlayerSaveGameData_MissionStateToJSON(
  object: MissionStatusPlayerSaveGameData_MissionState
): string {
  switch (object) {
    case MissionStatusPlayerSaveGameData_MissionState.MS_NotStarted:
      return "MS_NotStarted";
    case MissionStatusPlayerSaveGameData_MissionState.MS_Active:
      return "MS_Active";
    case MissionStatusPlayerSaveGameData_MissionState.MS_Complete:
      return "MS_Complete";
    case MissionStatusPlayerSaveGameData_MissionState.MS_Failed:
      return "MS_Failed";
    case MissionStatusPlayerSaveGameData_MissionState.MS_Unknown:
      return "MS_Unknown";
    default:
      return "UNKNOWN";
  }
}

export interface MissionPlaythroughSaveGameData {
  missionList: MissionStatusPlayerSaveGameData[];
  trackedMissionClassPath: string;
}

export interface ActiveFastTravelSaveData {
  activeTravelStationName: string;
  blacklisted: boolean;
}

export interface PlaythroughActiveFastTravelSaveData {
  activeTravelStations: ActiveFastTravelSaveData[];
}

export interface DiscoveredAreaInfo {
  discoveredAreaName: string;
  discoveredPlaythroughs: number;
}

export interface DiscoveredLevelInfo {
  discoveredLevelName: string;
  discoveredPlaythroughs: number;
  discoveredAreaInfo: DiscoveredAreaInfo[];
}

export interface DiscoveredPlanetInfo {
  discoveredPlanet: string;
  isNewPlanet: boolean;
}

export interface DiscoverySaveData {
  discoveredLevelInfo: DiscoveredLevelInfo[];
}

export interface VehicleUnlockedSaveGameData {
  assetPath: string;
  justUnlocked: boolean;
}

export interface OakCARMenuVehicleConfigSaveData {
  loadoutSaveName: string;
  bodyAssetPath: string;
  wheelAssetPath: string;
  armorAssetPath: string;
  coreModAssetPath: string;
  gunnerWeaponAssetPath: string;
  driverWeaponAssetPath: string;
  ornamentAssetPath: string;
  materialDecalAssetPath: string;
  materialAssetPath: string;
  colorIndex1: number;
  colorIndex2: number;
  colorIndex3: number;
}

export interface CustomPlayerColorSaveGameData {
  colorParameter: string;
  appliedColor: Vec3 | undefined;
  splitColor: Vec3 | undefined;
  useDefaultColor: boolean;
  useDefaultSplitColor: boolean;
  appliedColorAlpha: number;
  splitColorAlpha: number;
}

export interface CustomFloatCustomizationSaveGameData {
  name: string;
  value: number;
}

export interface EchoLogSaveGameData {
  hasBeenSeenInLog: boolean;
  echoLogPath: string;
}

export interface MapIDData {
  zoneNameId: number;
  mapNameId: number;
}

export interface GameStateSaveData {
  lastTraveledMapId: MapIDData | undefined;
  mayhemLevel: number;
  mayhemRandomSeed: number;
  mayhemUnlockedLevel: number;
}

export interface ChallengeCategoryProgressSaveData {
  categoryProgress: Uint8Array;
}

export interface OakPlayerCharacterAugmentSaveGameData {
  slotAssetPath: string;
  augmentAssetPath: string;
}

export interface OakPlayerCharacterSlotSaveGameData {
  augmentSlotList: OakPlayerCharacterAugmentSaveGameData[];
}

export interface UITrackingSaveGameData {
  hasSeenSkillMenuUnlock: boolean;
  hasSeenEchoBootAmmoBar: boolean;
  hasSeenEchoBootShieldBar: boolean;
  hasSeenEchoBootGrenades: boolean;
  highestThvmBreadcrumbSeen: number;
  inventorySlotUnlocksSeen: string[];
  savedSpinOffset: number;
}

export interface PlanetCycleInfo {
  planetName: string;
  cycleLength: number;
  lastCachedTime: number;
}

export interface TimeOfDaySaveGameData {
  planetCycleInfo: PlanetCycleInfo[];
  planetCycle: string;
}

export interface LevelPersistenceActorSaveGameData {
  actorName: string;
  timerRemaining: number;
}

export interface LevelPersistenceLevelSaveGameData {
  levelName: string;
  savedActors: LevelPersistenceActorSaveGameData[];
}

export interface GbxZoneMapFODSavedLevelData {
  levelName: string;
  fodTextureSize: number;
  numChunks: number;
  discoveryPercentage: number;
  dataState: number;
  dataRevision: number;
  fodData: Uint8Array;
}

export interface GbxZoneMapFODSaveGameData {
  levelData: GbxZoneMapFODSavedLevelData[];
}

export interface HeroPointsSaveData {
  strength: number;
  dexterity: number;
  intelligence: number;
  wisdom: number;
  constitution: number;
  luck: number;
  playerAspectDataPath: string;
  respecCount: number;
}

export interface GuidSaveData {
  A: number;
  B: number;
  C: number;
  D: number;
}

export interface TrackedInteractionSaveData {
  trackedInteractionData: string;
  completedInstances: GuidSaveData[];
}

export interface PlayerVoiceSaveData {
  data: string;
  pitch: number;
}

export interface OakProfileCloudDataPlayerPrestige {
  hasSeenTutorial: boolean;
  prestigeExperience: number;
  pointsSpentByIndexOrder: number[];
}

export interface OakProfileCloudData {
  profileStatsData: GameStatSaveGameData[];
  lostLootInventoryList: Uint8Array[];
  npcMailItems: OakMailItem[];
  profileSduList: OakSDUSaveGameData[];
  unlockedCustomizations: OakCustomizationSaveGameData[];
  unlockedInventoryCustomizationParts: OakInventoryCustomizationPartInfo[];
  challengeData: ChallengeSaveGameData[];
  mailGuids: string[];
  bankInventoryList: OakInventoryItemSaveGameData[];
  difficulty: number;
  playerPrestige: OakProfileCloudDataPlayerPrestige | undefined;
}

export interface DafTownHubTravelData {
  isSet: boolean;
  isActive: boolean;
  returnTravelLocation: Vec3 | undefined;
  returnTravelRotation: Vec3 | undefined;
  returnMapName: string;
  returnStationName: string;
  returnTravelStation: string;
}

export interface Character {
  saveGameId: number;
  lastSaveTimestamp: number;
  timePlayedSeconds: number;
  playerClassData: PlayerClassSaveGameData | undefined;
  resourcePools: ResourcePoolSavegameData[];
  savedRegions: RegionSaveGameData[];
  experiencePoints: number;
  gameStatsData: GameStatSaveGameData[];
  inventoryCategoryList: InventoryCategorySaveData[];
  inventoryItems: OakInventoryItemSaveGameData[];
  equippedInventoryList: EquippedInventorySaveGameData[];
  activeWeaponList: number[];
  abilityData: OakPlayerAbilitySaveGameData | undefined;
  lastPlayThroughIndex: number;
  playthroughsCompleted: number;
  showNewPlaythroughNotification: boolean;
  missionPlaythroughsData: MissionPlaythroughSaveGameData[];
  lastActiveTravelStationForPlaythrough: string[];
  gameStateSaveDataForPlaythrough: GameStateSaveData[];
  registeredDownloadableEntitlements: RegisteredDownloadableEntitlements[];
  activeTravelStationsForPlaythrough: PlaythroughActiveFastTravelSaveData[];
  discoveryData: DiscoverySaveData | undefined;
  saveGameGuid: string;
  vehiclesUnlockedData: VehicleUnlockedSaveGameData[];
  vehiclePartsUnlocked: string[];
  vehicleLoadouts: OakCARMenuVehicleConfigSaveData[];
  vehicleLastLoadoutIndex: number;
  challengeData: ChallengeSaveGameData[];
  sduList: OakSDUSaveGameData[];
  selectedCustomizations: string[];
  equippedEmoteCustomizations: number[];
  selectedColorCustomizations: CustomPlayerColorSaveGameData[];
  gbxZoneMapFodSaveGameData: GbxZoneMapFODSaveGameData | undefined;
  unlockedEchoLogs: EchoLogSaveGameData[];
  nicknameMappings: Character_NicknameMappingsEntry[];
  accumulatedLevelPersistenceResetTimerSeconds: number;
  challengeCategoryCompletionPcts:
    | ChallengeCategoryProgressSaveData
    | undefined;
  characterSlotSaveGameData: OakPlayerCharacterSlotSaveGameData | undefined;
  uiTrackingSaveGameData: UITrackingSaveGameData | undefined;
  preferredCharacterName: string;
  nameCharacterLimit: number;
  preferredGroupMode: number;
  timeOfDaySaveGameData: TimeOfDaySaveGameData | undefined;
  levelPersistenceData: LevelPersistenceLevelSaveGameData[];
  customFloatCustomizations: CustomFloatCustomizationSaveGameData[];
  heroPointsSaveData: HeroPointsSaveData | undefined;
  trackedInteractions: TrackedInteractionSaveData[];
  playerPronounSelection: string;
  playerVoice: PlayerVoiceSaveData | undefined;
  lastOverworldTravelStationForPlaythrough: string[];
  disableCustomizationSuppression: boolean;
  customizationLinkData: OakProfileCustomizationLinkData[];
  profileCloudData: OakProfileCloudData | undefined;
  townhubTravelInfo: DafTownHubTravelData | undefined;
  difficulty: number;
}

export interface Character_NicknameMappingsEntry {
  key: string;
  value: string;
}

function createBasePlayerClassSaveGameData(): PlayerClassSaveGameData {
  return { playerClassPath: "", dlcPackageId: 0 };
}

export const PlayerClassSaveGameData = {
  encode(
    message: PlayerClassSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.playerClassPath !== "") {
      writer.uint32(10).string(message.playerClassPath);
    }
    if (message.dlcPackageId !== 0) {
      writer.uint32(16).uint32(message.dlcPackageId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlayerClassSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerClassSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.playerClassPath = reader.string();
          break;
        case 2:
          message.dlcPackageId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlayerClassSaveGameData {
    return {
      playerClassPath: isSet(object.playerClassPath)
        ? String(object.playerClassPath)
        : "",
      dlcPackageId: isSet(object.dlcPackageId)
        ? Number(object.dlcPackageId)
        : 0,
    };
  },

  toJSON(message: PlayerClassSaveGameData): unknown {
    const obj: any = {};
    message.playerClassPath !== undefined &&
      (obj.playerClassPath = message.playerClassPath);
    message.dlcPackageId !== undefined &&
      (obj.dlcPackageId = Math.round(message.dlcPackageId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlayerClassSaveGameData>, I>>(
    object: I
  ): PlayerClassSaveGameData {
    const message = createBasePlayerClassSaveGameData();
    message.playerClassPath = object.playerClassPath ?? "";
    message.dlcPackageId = object.dlcPackageId ?? 0;
    return message;
  },
};

function createBaseResourcePoolSavegameData(): ResourcePoolSavegameData {
  return { amount: 0, resourcePath: "" };
}

export const ResourcePoolSavegameData = {
  encode(
    message: ResourcePoolSavegameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.amount !== 0) {
      writer.uint32(13).float(message.amount);
    }
    if (message.resourcePath !== "") {
      writer.uint32(18).string(message.resourcePath);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ResourcePoolSavegameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourcePoolSavegameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.float();
          break;
        case 2:
          message.resourcePath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResourcePoolSavegameData {
    return {
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      resourcePath: isSet(object.resourcePath)
        ? String(object.resourcePath)
        : "",
    };
  },

  toJSON(message: ResourcePoolSavegameData): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    message.resourcePath !== undefined &&
      (obj.resourcePath = message.resourcePath);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResourcePoolSavegameData>, I>>(
    object: I
  ): ResourcePoolSavegameData {
    const message = createBaseResourcePoolSavegameData();
    message.amount = object.amount ?? 0;
    message.resourcePath = object.resourcePath ?? "";
    return message;
  },
};

function createBaseRegionSaveGameData(): RegionSaveGameData {
  return { gameStage: 0, playThroughIdx: 0, regionPath: "", dlcPackageId: 0 };
}

export const RegionSaveGameData = {
  encode(
    message: RegionSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.gameStage !== 0) {
      writer.uint32(8).int32(message.gameStage);
    }
    if (message.playThroughIdx !== 0) {
      writer.uint32(16).int32(message.playThroughIdx);
    }
    if (message.regionPath !== "") {
      writer.uint32(26).string(message.regionPath);
    }
    if (message.dlcPackageId !== 0) {
      writer.uint32(32).uint32(message.dlcPackageId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RegionSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegionSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.gameStage = reader.int32();
          break;
        case 2:
          message.playThroughIdx = reader.int32();
          break;
        case 3:
          message.regionPath = reader.string();
          break;
        case 4:
          message.dlcPackageId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegionSaveGameData {
    return {
      gameStage: isSet(object.gameStage) ? Number(object.gameStage) : 0,
      playThroughIdx: isSet(object.playThroughIdx)
        ? Number(object.playThroughIdx)
        : 0,
      regionPath: isSet(object.regionPath) ? String(object.regionPath) : "",
      dlcPackageId: isSet(object.dlcPackageId)
        ? Number(object.dlcPackageId)
        : 0,
    };
  },

  toJSON(message: RegionSaveGameData): unknown {
    const obj: any = {};
    message.gameStage !== undefined &&
      (obj.gameStage = Math.round(message.gameStage));
    message.playThroughIdx !== undefined &&
      (obj.playThroughIdx = Math.round(message.playThroughIdx));
    message.regionPath !== undefined && (obj.regionPath = message.regionPath);
    message.dlcPackageId !== undefined &&
      (obj.dlcPackageId = Math.round(message.dlcPackageId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegionSaveGameData>, I>>(
    object: I
  ): RegionSaveGameData {
    const message = createBaseRegionSaveGameData();
    message.gameStage = object.gameStage ?? 0;
    message.playThroughIdx = object.playThroughIdx ?? 0;
    message.regionPath = object.regionPath ?? "";
    message.dlcPackageId = object.dlcPackageId ?? 0;
    return message;
  },
};

function createBaseEquippedInventorySaveGameData(): EquippedInventorySaveGameData {
  return { inventoryListIndex: 0, enabled: false, slotDataPath: "" };
}

export const EquippedInventorySaveGameData = {
  encode(
    message: EquippedInventorySaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.inventoryListIndex !== 0) {
      writer.uint32(8).int32(message.inventoryListIndex);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    if (message.slotDataPath !== "") {
      writer.uint32(26).string(message.slotDataPath);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EquippedInventorySaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquippedInventorySaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.inventoryListIndex = reader.int32();
          break;
        case 2:
          message.enabled = reader.bool();
          break;
        case 3:
          message.slotDataPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EquippedInventorySaveGameData {
    return {
      inventoryListIndex: isSet(object.inventoryListIndex)
        ? Number(object.inventoryListIndex)
        : 0,
      enabled: isSet(object.enabled) ? Boolean(object.enabled) : false,
      slotDataPath: isSet(object.slotDataPath)
        ? String(object.slotDataPath)
        : "",
    };
  },

  toJSON(message: EquippedInventorySaveGameData): unknown {
    const obj: any = {};
    message.inventoryListIndex !== undefined &&
      (obj.inventoryListIndex = Math.round(message.inventoryListIndex));
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.slotDataPath !== undefined &&
      (obj.slotDataPath = message.slotDataPath);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EquippedInventorySaveGameData>, I>>(
    object: I
  ): EquippedInventorySaveGameData {
    const message = createBaseEquippedInventorySaveGameData();
    message.inventoryListIndex = object.inventoryListIndex ?? 0;
    message.enabled = object.enabled ?? false;
    message.slotDataPath = object.slotDataPath ?? "";
    return message;
  },
};

function createBaseOakAbilityTreeItemSaveGameData(): OakAbilityTreeItemSaveGameData {
  return { itemAssetPath: "", points: 0, maxPoints: 0, treeIdentifier: 0 };
}

export const OakAbilityTreeItemSaveGameData = {
  encode(
    message: OakAbilityTreeItemSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.itemAssetPath !== "") {
      writer.uint32(10).string(message.itemAssetPath);
    }
    if (message.points !== 0) {
      writer.uint32(16).int32(message.points);
    }
    if (message.maxPoints !== 0) {
      writer.uint32(24).int32(message.maxPoints);
    }
    if (message.treeIdentifier !== 0) {
      writer.uint32(32).int32(message.treeIdentifier);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OakAbilityTreeItemSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOakAbilityTreeItemSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.itemAssetPath = reader.string();
          break;
        case 2:
          message.points = reader.int32();
          break;
        case 3:
          message.maxPoints = reader.int32();
          break;
        case 4:
          message.treeIdentifier = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OakAbilityTreeItemSaveGameData {
    return {
      itemAssetPath: isSet(object.itemAssetPath)
        ? String(object.itemAssetPath)
        : "",
      points: isSet(object.points) ? Number(object.points) : 0,
      maxPoints: isSet(object.maxPoints) ? Number(object.maxPoints) : 0,
      treeIdentifier: isSet(object.treeIdentifier)
        ? Number(object.treeIdentifier)
        : 0,
    };
  },

  toJSON(message: OakAbilityTreeItemSaveGameData): unknown {
    const obj: any = {};
    message.itemAssetPath !== undefined &&
      (obj.itemAssetPath = message.itemAssetPath);
    message.points !== undefined && (obj.points = Math.round(message.points));
    message.maxPoints !== undefined &&
      (obj.maxPoints = Math.round(message.maxPoints));
    message.treeIdentifier !== undefined &&
      (obj.treeIdentifier = Math.round(message.treeIdentifier));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OakAbilityTreeItemSaveGameData>, I>>(
    object: I
  ): OakAbilityTreeItemSaveGameData {
    const message = createBaseOakAbilityTreeItemSaveGameData();
    message.itemAssetPath = object.itemAssetPath ?? "";
    message.points = object.points ?? 0;
    message.maxPoints = object.maxPoints ?? 0;
    message.treeIdentifier = object.treeIdentifier ?? 0;
    return message;
  },
};

function createBaseOakAbilitySlotSaveGameData(): OakAbilitySlotSaveGameData {
  return { abilityClassPath: "", slotAssetPath: "" };
}

export const OakAbilitySlotSaveGameData = {
  encode(
    message: OakAbilitySlotSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.abilityClassPath !== "") {
      writer.uint32(10).string(message.abilityClassPath);
    }
    if (message.slotAssetPath !== "") {
      writer.uint32(18).string(message.slotAssetPath);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OakAbilitySlotSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOakAbilitySlotSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abilityClassPath = reader.string();
          break;
        case 2:
          message.slotAssetPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OakAbilitySlotSaveGameData {
    return {
      abilityClassPath: isSet(object.abilityClassPath)
        ? String(object.abilityClassPath)
        : "",
      slotAssetPath: isSet(object.slotAssetPath)
        ? String(object.slotAssetPath)
        : "",
    };
  },

  toJSON(message: OakAbilitySlotSaveGameData): unknown {
    const obj: any = {};
    message.abilityClassPath !== undefined &&
      (obj.abilityClassPath = message.abilityClassPath);
    message.slotAssetPath !== undefined &&
      (obj.slotAssetPath = message.slotAssetPath);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OakAbilitySlotSaveGameData>, I>>(
    object: I
  ): OakAbilitySlotSaveGameData {
    const message = createBaseOakAbilitySlotSaveGameData();
    message.abilityClassPath = object.abilityClassPath ?? "";
    message.slotAssetPath = object.slotAssetPath ?? "";
    return message;
  },
};

function createBaseOakActionAbilityAugmentSaveGameData(): OakActionAbilityAugmentSaveGameData {
  return {
    actionAbilityClassPath: "",
    slotAssetPath: "",
    augmentAssetPath: "",
  };
}

export const OakActionAbilityAugmentSaveGameData = {
  encode(
    message: OakActionAbilityAugmentSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.actionAbilityClassPath !== "") {
      writer.uint32(10).string(message.actionAbilityClassPath);
    }
    if (message.slotAssetPath !== "") {
      writer.uint32(18).string(message.slotAssetPath);
    }
    if (message.augmentAssetPath !== "") {
      writer.uint32(26).string(message.augmentAssetPath);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OakActionAbilityAugmentSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOakActionAbilityAugmentSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actionAbilityClassPath = reader.string();
          break;
        case 2:
          message.slotAssetPath = reader.string();
          break;
        case 3:
          message.augmentAssetPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OakActionAbilityAugmentSaveGameData {
    return {
      actionAbilityClassPath: isSet(object.actionAbilityClassPath)
        ? String(object.actionAbilityClassPath)
        : "",
      slotAssetPath: isSet(object.slotAssetPath)
        ? String(object.slotAssetPath)
        : "",
      augmentAssetPath: isSet(object.augmentAssetPath)
        ? String(object.augmentAssetPath)
        : "",
    };
  },

  toJSON(message: OakActionAbilityAugmentSaveGameData): unknown {
    const obj: any = {};
    message.actionAbilityClassPath !== undefined &&
      (obj.actionAbilityClassPath = message.actionAbilityClassPath);
    message.slotAssetPath !== undefined &&
      (obj.slotAssetPath = message.slotAssetPath);
    message.augmentAssetPath !== undefined &&
      (obj.augmentAssetPath = message.augmentAssetPath);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<OakActionAbilityAugmentSaveGameData>, I>
  >(object: I): OakActionAbilityAugmentSaveGameData {
    const message = createBaseOakActionAbilityAugmentSaveGameData();
    message.actionAbilityClassPath = object.actionAbilityClassPath ?? "";
    message.slotAssetPath = object.slotAssetPath ?? "";
    message.augmentAssetPath = object.augmentAssetPath ?? "";
    return message;
  },
};

function createBaseOakActionAbilityAugmentConfigurationSaveGameData(): OakActionAbilityAugmentConfigurationSaveGameData {
  return {
    abilityClassPath: "",
    augmentAssetPath: "",
    modSlotAssetPath: "",
    modAssetPath: "",
  };
}

export const OakActionAbilityAugmentConfigurationSaveGameData = {
  encode(
    message: OakActionAbilityAugmentConfigurationSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.abilityClassPath !== "") {
      writer.uint32(10).string(message.abilityClassPath);
    }
    if (message.augmentAssetPath !== "") {
      writer.uint32(18).string(message.augmentAssetPath);
    }
    if (message.modSlotAssetPath !== "") {
      writer.uint32(26).string(message.modSlotAssetPath);
    }
    if (message.modAssetPath !== "") {
      writer.uint32(34).string(message.modAssetPath);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OakActionAbilityAugmentConfigurationSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseOakActionAbilityAugmentConfigurationSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abilityClassPath = reader.string();
          break;
        case 2:
          message.augmentAssetPath = reader.string();
          break;
        case 3:
          message.modSlotAssetPath = reader.string();
          break;
        case 4:
          message.modAssetPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OakActionAbilityAugmentConfigurationSaveGameData {
    return {
      abilityClassPath: isSet(object.abilityClassPath)
        ? String(object.abilityClassPath)
        : "",
      augmentAssetPath: isSet(object.augmentAssetPath)
        ? String(object.augmentAssetPath)
        : "",
      modSlotAssetPath: isSet(object.modSlotAssetPath)
        ? String(object.modSlotAssetPath)
        : "",
      modAssetPath: isSet(object.modAssetPath)
        ? String(object.modAssetPath)
        : "",
    };
  },

  toJSON(message: OakActionAbilityAugmentConfigurationSaveGameData): unknown {
    const obj: any = {};
    message.abilityClassPath !== undefined &&
      (obj.abilityClassPath = message.abilityClassPath);
    message.augmentAssetPath !== undefined &&
      (obj.augmentAssetPath = message.augmentAssetPath);
    message.modSlotAssetPath !== undefined &&
      (obj.modSlotAssetPath = message.modSlotAssetPath);
    message.modAssetPath !== undefined &&
      (obj.modAssetPath = message.modAssetPath);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<OakActionAbilityAugmentConfigurationSaveGameData>,
      I
    >
  >(object: I): OakActionAbilityAugmentConfigurationSaveGameData {
    const message =
      createBaseOakActionAbilityAugmentConfigurationSaveGameData();
    message.abilityClassPath = object.abilityClassPath ?? "";
    message.augmentAssetPath = object.augmentAssetPath ?? "";
    message.modSlotAssetPath = object.modSlotAssetPath ?? "";
    message.modAssetPath = object.modAssetPath ?? "";
    return message;
  },
};

function createBaseOakDualClassSaveGameData(): OakDualClassSaveGameData {
  return {
    primaryBranchPath: "",
    unlockedSecondaryBranchPaths: [],
    slottedSecondaryBranchPath: "",
    unlockedClassFeatures: false,
    unlockedInitialSecondaryClass: false,
    unlockedSecondaryClassSwapping: false,
  };
}

export const OakDualClassSaveGameData = {
  encode(
    message: OakDualClassSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.primaryBranchPath !== "") {
      writer.uint32(10).string(message.primaryBranchPath);
    }
    for (const v of message.unlockedSecondaryBranchPaths) {
      writer.uint32(18).string(v!);
    }
    if (message.slottedSecondaryBranchPath !== "") {
      writer.uint32(26).string(message.slottedSecondaryBranchPath);
    }
    if (message.unlockedClassFeatures === true) {
      writer.uint32(32).bool(message.unlockedClassFeatures);
    }
    if (message.unlockedInitialSecondaryClass === true) {
      writer.uint32(40).bool(message.unlockedInitialSecondaryClass);
    }
    if (message.unlockedSecondaryClassSwapping === true) {
      writer.uint32(48).bool(message.unlockedSecondaryClassSwapping);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OakDualClassSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOakDualClassSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.primaryBranchPath = reader.string();
          break;
        case 2:
          message.unlockedSecondaryBranchPaths.push(reader.string());
          break;
        case 3:
          message.slottedSecondaryBranchPath = reader.string();
          break;
        case 4:
          message.unlockedClassFeatures = reader.bool();
          break;
        case 5:
          message.unlockedInitialSecondaryClass = reader.bool();
          break;
        case 6:
          message.unlockedSecondaryClassSwapping = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OakDualClassSaveGameData {
    return {
      primaryBranchPath: isSet(object.primaryBranchPath)
        ? String(object.primaryBranchPath)
        : "",
      unlockedSecondaryBranchPaths: Array.isArray(
        object?.unlockedSecondaryBranchPaths
      )
        ? object.unlockedSecondaryBranchPaths.map((e: any) => String(e))
        : [],
      slottedSecondaryBranchPath: isSet(object.slottedSecondaryBranchPath)
        ? String(object.slottedSecondaryBranchPath)
        : "",
      unlockedClassFeatures: isSet(object.unlockedClassFeatures)
        ? Boolean(object.unlockedClassFeatures)
        : false,
      unlockedInitialSecondaryClass: isSet(object.unlockedInitialSecondaryClass)
        ? Boolean(object.unlockedInitialSecondaryClass)
        : false,
      unlockedSecondaryClassSwapping: isSet(
        object.unlockedSecondaryClassSwapping
      )
        ? Boolean(object.unlockedSecondaryClassSwapping)
        : false,
    };
  },

  toJSON(message: OakDualClassSaveGameData): unknown {
    const obj: any = {};
    message.primaryBranchPath !== undefined &&
      (obj.primaryBranchPath = message.primaryBranchPath);
    if (message.unlockedSecondaryBranchPaths) {
      obj.unlockedSecondaryBranchPaths =
        message.unlockedSecondaryBranchPaths.map((e) => e);
    } else {
      obj.unlockedSecondaryBranchPaths = [];
    }
    message.slottedSecondaryBranchPath !== undefined &&
      (obj.slottedSecondaryBranchPath = message.slottedSecondaryBranchPath);
    message.unlockedClassFeatures !== undefined &&
      (obj.unlockedClassFeatures = message.unlockedClassFeatures);
    message.unlockedInitialSecondaryClass !== undefined &&
      (obj.unlockedInitialSecondaryClass =
        message.unlockedInitialSecondaryClass);
    message.unlockedSecondaryClassSwapping !== undefined &&
      (obj.unlockedSecondaryClassSwapping =
        message.unlockedSecondaryClassSwapping);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OakDualClassSaveGameData>, I>>(
    object: I
  ): OakDualClassSaveGameData {
    const message = createBaseOakDualClassSaveGameData();
    message.primaryBranchPath = object.primaryBranchPath ?? "";
    message.unlockedSecondaryBranchPaths =
      object.unlockedSecondaryBranchPaths?.map((e) => e) || [];
    message.slottedSecondaryBranchPath =
      object.slottedSecondaryBranchPath ?? "";
    message.unlockedClassFeatures = object.unlockedClassFeatures ?? false;
    message.unlockedInitialSecondaryClass =
      object.unlockedInitialSecondaryClass ?? false;
    message.unlockedSecondaryClassSwapping =
      object.unlockedSecondaryClassSwapping ?? false;
    return message;
  },
};

function createBaseOakPlayerAbilitySaveGameData(): OakPlayerAbilitySaveGameData {
  return {
    abilityPoints: 0,
    treeItemList: [],
    abilitySlotList: [],
    augmentSlotList: [],
    augmentConfigurationList: [],
    treeGrade: 0,
    dualClassSaveData: undefined,
    respecCount: 0,
  };
}

export const OakPlayerAbilitySaveGameData = {
  encode(
    message: OakPlayerAbilitySaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.abilityPoints !== 0) {
      writer.uint32(8).int32(message.abilityPoints);
    }
    for (const v of message.treeItemList) {
      OakAbilityTreeItemSaveGameData.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.abilitySlotList) {
      OakAbilitySlotSaveGameData.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.augmentSlotList) {
      OakActionAbilityAugmentSaveGameData.encode(
        v!,
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.augmentConfigurationList) {
      OakActionAbilityAugmentConfigurationSaveGameData.encode(
        v!,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.treeGrade !== 0) {
      writer.uint32(48).int32(message.treeGrade);
    }
    if (message.dualClassSaveData !== undefined) {
      OakDualClassSaveGameData.encode(
        message.dualClassSaveData,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.respecCount !== 0) {
      writer.uint32(64).uint32(message.respecCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OakPlayerAbilitySaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOakPlayerAbilitySaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.abilityPoints = reader.int32();
          break;
        case 2:
          message.treeItemList.push(
            OakAbilityTreeItemSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.abilitySlotList.push(
            OakAbilitySlotSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.augmentSlotList.push(
            OakActionAbilityAugmentSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.augmentConfigurationList.push(
            OakActionAbilityAugmentConfigurationSaveGameData.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        case 6:
          message.treeGrade = reader.int32();
          break;
        case 7:
          message.dualClassSaveData = OakDualClassSaveGameData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.respecCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OakPlayerAbilitySaveGameData {
    return {
      abilityPoints: isSet(object.abilityPoints)
        ? Number(object.abilityPoints)
        : 0,
      treeItemList: Array.isArray(object?.treeItemList)
        ? object.treeItemList.map((e: any) =>
            OakAbilityTreeItemSaveGameData.fromJSON(e)
          )
        : [],
      abilitySlotList: Array.isArray(object?.abilitySlotList)
        ? object.abilitySlotList.map((e: any) =>
            OakAbilitySlotSaveGameData.fromJSON(e)
          )
        : [],
      augmentSlotList: Array.isArray(object?.augmentSlotList)
        ? object.augmentSlotList.map((e: any) =>
            OakActionAbilityAugmentSaveGameData.fromJSON(e)
          )
        : [],
      augmentConfigurationList: Array.isArray(object?.augmentConfigurationList)
        ? object.augmentConfigurationList.map((e: any) =>
            OakActionAbilityAugmentConfigurationSaveGameData.fromJSON(e)
          )
        : [],
      treeGrade: isSet(object.treeGrade) ? Number(object.treeGrade) : 0,
      dualClassSaveData: isSet(object.dualClassSaveData)
        ? OakDualClassSaveGameData.fromJSON(object.dualClassSaveData)
        : undefined,
      respecCount: isSet(object.respecCount) ? Number(object.respecCount) : 0,
    };
  },

  toJSON(message: OakPlayerAbilitySaveGameData): unknown {
    const obj: any = {};
    message.abilityPoints !== undefined &&
      (obj.abilityPoints = Math.round(message.abilityPoints));
    if (message.treeItemList) {
      obj.treeItemList = message.treeItemList.map((e) =>
        e ? OakAbilityTreeItemSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.treeItemList = [];
    }
    if (message.abilitySlotList) {
      obj.abilitySlotList = message.abilitySlotList.map((e) =>
        e ? OakAbilitySlotSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.abilitySlotList = [];
    }
    if (message.augmentSlotList) {
      obj.augmentSlotList = message.augmentSlotList.map((e) =>
        e ? OakActionAbilityAugmentSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.augmentSlotList = [];
    }
    if (message.augmentConfigurationList) {
      obj.augmentConfigurationList = message.augmentConfigurationList.map((e) =>
        e
          ? OakActionAbilityAugmentConfigurationSaveGameData.toJSON(e)
          : undefined
      );
    } else {
      obj.augmentConfigurationList = [];
    }
    message.treeGrade !== undefined &&
      (obj.treeGrade = Math.round(message.treeGrade));
    message.dualClassSaveData !== undefined &&
      (obj.dualClassSaveData = message.dualClassSaveData
        ? OakDualClassSaveGameData.toJSON(message.dualClassSaveData)
        : undefined);
    message.respecCount !== undefined &&
      (obj.respecCount = Math.round(message.respecCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OakPlayerAbilitySaveGameData>, I>>(
    object: I
  ): OakPlayerAbilitySaveGameData {
    const message = createBaseOakPlayerAbilitySaveGameData();
    message.abilityPoints = object.abilityPoints ?? 0;
    message.treeItemList =
      object.treeItemList?.map((e) =>
        OakAbilityTreeItemSaveGameData.fromPartial(e)
      ) || [];
    message.abilitySlotList =
      object.abilitySlotList?.map((e) =>
        OakAbilitySlotSaveGameData.fromPartial(e)
      ) || [];
    message.augmentSlotList =
      object.augmentSlotList?.map((e) =>
        OakActionAbilityAugmentSaveGameData.fromPartial(e)
      ) || [];
    message.augmentConfigurationList =
      object.augmentConfigurationList?.map((e) =>
        OakActionAbilityAugmentConfigurationSaveGameData.fromPartial(e)
      ) || [];
    message.treeGrade = object.treeGrade ?? 0;
    message.dualClassSaveData =
      object.dualClassSaveData !== undefined &&
      object.dualClassSaveData !== null
        ? OakDualClassSaveGameData.fromPartial(object.dualClassSaveData)
        : undefined;
    message.respecCount = object.respecCount ?? 0;
    return message;
  },
};

function createBaseMissionStatusPlayerSaveGameData(): MissionStatusPlayerSaveGameData {
  return {
    status: 0,
    hasBeenViewedInLog: false,
    objectivesProgress: [],
    missionClassPath: "",
    activeObjectiveSetPath: "",
    dlcPackageId: 0,
    kickoffPlayed: false,
  };
}

export const MissionStatusPlayerSaveGameData = {
  encode(
    message: MissionStatusPlayerSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.status !== 0) {
      writer.uint32(8).int32(message.status);
    }
    if (message.hasBeenViewedInLog === true) {
      writer.uint32(16).bool(message.hasBeenViewedInLog);
    }
    writer.uint32(26).fork();
    for (const v of message.objectivesProgress) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.missionClassPath !== "") {
      writer.uint32(34).string(message.missionClassPath);
    }
    if (message.activeObjectiveSetPath !== "") {
      writer.uint32(42).string(message.activeObjectiveSetPath);
    }
    if (message.dlcPackageId !== 0) {
      writer.uint32(48).uint32(message.dlcPackageId);
    }
    if (message.kickoffPlayed === true) {
      writer.uint32(56).bool(message.kickoffPlayed);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MissionStatusPlayerSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMissionStatusPlayerSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.int32() as any;
          break;
        case 2:
          message.hasBeenViewedInLog = reader.bool();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.objectivesProgress.push(reader.int32());
            }
          } else {
            message.objectivesProgress.push(reader.int32());
          }
          break;
        case 4:
          message.missionClassPath = reader.string();
          break;
        case 5:
          message.activeObjectiveSetPath = reader.string();
          break;
        case 6:
          message.dlcPackageId = reader.uint32();
          break;
        case 7:
          message.kickoffPlayed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MissionStatusPlayerSaveGameData {
    return {
      status: isSet(object.status)
        ? missionStatusPlayerSaveGameData_MissionStateFromJSON(object.status)
        : 0,
      hasBeenViewedInLog: isSet(object.hasBeenViewedInLog)
        ? Boolean(object.hasBeenViewedInLog)
        : false,
      objectivesProgress: Array.isArray(object?.objectivesProgress)
        ? object.objectivesProgress.map((e: any) => Number(e))
        : [],
      missionClassPath: isSet(object.missionClassPath)
        ? String(object.missionClassPath)
        : "",
      activeObjectiveSetPath: isSet(object.activeObjectiveSetPath)
        ? String(object.activeObjectiveSetPath)
        : "",
      dlcPackageId: isSet(object.dlcPackageId)
        ? Number(object.dlcPackageId)
        : 0,
      kickoffPlayed: isSet(object.kickoffPlayed)
        ? Boolean(object.kickoffPlayed)
        : false,
    };
  },

  toJSON(message: MissionStatusPlayerSaveGameData): unknown {
    const obj: any = {};
    message.status !== undefined &&
      (obj.status = missionStatusPlayerSaveGameData_MissionStateToJSON(
        message.status
      ));
    message.hasBeenViewedInLog !== undefined &&
      (obj.hasBeenViewedInLog = message.hasBeenViewedInLog);
    if (message.objectivesProgress) {
      obj.objectivesProgress = message.objectivesProgress.map((e) =>
        Math.round(e)
      );
    } else {
      obj.objectivesProgress = [];
    }
    message.missionClassPath !== undefined &&
      (obj.missionClassPath = message.missionClassPath);
    message.activeObjectiveSetPath !== undefined &&
      (obj.activeObjectiveSetPath = message.activeObjectiveSetPath);
    message.dlcPackageId !== undefined &&
      (obj.dlcPackageId = Math.round(message.dlcPackageId));
    message.kickoffPlayed !== undefined &&
      (obj.kickoffPlayed = message.kickoffPlayed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MissionStatusPlayerSaveGameData>, I>>(
    object: I
  ): MissionStatusPlayerSaveGameData {
    const message = createBaseMissionStatusPlayerSaveGameData();
    message.status = object.status ?? 0;
    message.hasBeenViewedInLog = object.hasBeenViewedInLog ?? false;
    message.objectivesProgress = object.objectivesProgress?.map((e) => e) || [];
    message.missionClassPath = object.missionClassPath ?? "";
    message.activeObjectiveSetPath = object.activeObjectiveSetPath ?? "";
    message.dlcPackageId = object.dlcPackageId ?? 0;
    message.kickoffPlayed = object.kickoffPlayed ?? false;
    return message;
  },
};

function createBaseMissionPlaythroughSaveGameData(): MissionPlaythroughSaveGameData {
  return { missionList: [], trackedMissionClassPath: "" };
}

export const MissionPlaythroughSaveGameData = {
  encode(
    message: MissionPlaythroughSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.missionList) {
      MissionStatusPlayerSaveGameData.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.trackedMissionClassPath !== "") {
      writer.uint32(18).string(message.trackedMissionClassPath);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MissionPlaythroughSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMissionPlaythroughSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.missionList.push(
            MissionStatusPlayerSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.trackedMissionClassPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MissionPlaythroughSaveGameData {
    return {
      missionList: Array.isArray(object?.missionList)
        ? object.missionList.map((e: any) =>
            MissionStatusPlayerSaveGameData.fromJSON(e)
          )
        : [],
      trackedMissionClassPath: isSet(object.trackedMissionClassPath)
        ? String(object.trackedMissionClassPath)
        : "",
    };
  },

  toJSON(message: MissionPlaythroughSaveGameData): unknown {
    const obj: any = {};
    if (message.missionList) {
      obj.missionList = message.missionList.map((e) =>
        e ? MissionStatusPlayerSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.missionList = [];
    }
    message.trackedMissionClassPath !== undefined &&
      (obj.trackedMissionClassPath = message.trackedMissionClassPath);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MissionPlaythroughSaveGameData>, I>>(
    object: I
  ): MissionPlaythroughSaveGameData {
    const message = createBaseMissionPlaythroughSaveGameData();
    message.missionList =
      object.missionList?.map((e) =>
        MissionStatusPlayerSaveGameData.fromPartial(e)
      ) || [];
    message.trackedMissionClassPath = object.trackedMissionClassPath ?? "";
    return message;
  },
};

function createBaseActiveFastTravelSaveData(): ActiveFastTravelSaveData {
  return { activeTravelStationName: "", blacklisted: false };
}

export const ActiveFastTravelSaveData = {
  encode(
    message: ActiveFastTravelSaveData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.activeTravelStationName !== "") {
      writer.uint32(10).string(message.activeTravelStationName);
    }
    if (message.blacklisted === true) {
      writer.uint32(16).bool(message.blacklisted);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ActiveFastTravelSaveData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseActiveFastTravelSaveData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activeTravelStationName = reader.string();
          break;
        case 2:
          message.blacklisted = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ActiveFastTravelSaveData {
    return {
      activeTravelStationName: isSet(object.activeTravelStationName)
        ? String(object.activeTravelStationName)
        : "",
      blacklisted: isSet(object.blacklisted)
        ? Boolean(object.blacklisted)
        : false,
    };
  },

  toJSON(message: ActiveFastTravelSaveData): unknown {
    const obj: any = {};
    message.activeTravelStationName !== undefined &&
      (obj.activeTravelStationName = message.activeTravelStationName);
    message.blacklisted !== undefined &&
      (obj.blacklisted = message.blacklisted);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ActiveFastTravelSaveData>, I>>(
    object: I
  ): ActiveFastTravelSaveData {
    const message = createBaseActiveFastTravelSaveData();
    message.activeTravelStationName = object.activeTravelStationName ?? "";
    message.blacklisted = object.blacklisted ?? false;
    return message;
  },
};

function createBasePlaythroughActiveFastTravelSaveData(): PlaythroughActiveFastTravelSaveData {
  return { activeTravelStations: [] };
}

export const PlaythroughActiveFastTravelSaveData = {
  encode(
    message: PlaythroughActiveFastTravelSaveData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.activeTravelStations) {
      ActiveFastTravelSaveData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PlaythroughActiveFastTravelSaveData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaythroughActiveFastTravelSaveData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.activeTravelStations.push(
            ActiveFastTravelSaveData.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlaythroughActiveFastTravelSaveData {
    return {
      activeTravelStations: Array.isArray(object?.activeTravelStations)
        ? object.activeTravelStations.map((e: any) =>
            ActiveFastTravelSaveData.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: PlaythroughActiveFastTravelSaveData): unknown {
    const obj: any = {};
    if (message.activeTravelStations) {
      obj.activeTravelStations = message.activeTravelStations.map((e) =>
        e ? ActiveFastTravelSaveData.toJSON(e) : undefined
      );
    } else {
      obj.activeTravelStations = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<PlaythroughActiveFastTravelSaveData>, I>
  >(object: I): PlaythroughActiveFastTravelSaveData {
    const message = createBasePlaythroughActiveFastTravelSaveData();
    message.activeTravelStations =
      object.activeTravelStations?.map((e) =>
        ActiveFastTravelSaveData.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseDiscoveredAreaInfo(): DiscoveredAreaInfo {
  return { discoveredAreaName: "", discoveredPlaythroughs: 0 };
}

export const DiscoveredAreaInfo = {
  encode(
    message: DiscoveredAreaInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.discoveredAreaName !== "") {
      writer.uint32(10).string(message.discoveredAreaName);
    }
    if (message.discoveredPlaythroughs !== 0) {
      writer.uint32(16).uint32(message.discoveredPlaythroughs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiscoveredAreaInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiscoveredAreaInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.discoveredAreaName = reader.string();
          break;
        case 2:
          message.discoveredPlaythroughs = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DiscoveredAreaInfo {
    return {
      discoveredAreaName: isSet(object.discoveredAreaName)
        ? String(object.discoveredAreaName)
        : "",
      discoveredPlaythroughs: isSet(object.discoveredPlaythroughs)
        ? Number(object.discoveredPlaythroughs)
        : 0,
    };
  },

  toJSON(message: DiscoveredAreaInfo): unknown {
    const obj: any = {};
    message.discoveredAreaName !== undefined &&
      (obj.discoveredAreaName = message.discoveredAreaName);
    message.discoveredPlaythroughs !== undefined &&
      (obj.discoveredPlaythroughs = Math.round(message.discoveredPlaythroughs));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DiscoveredAreaInfo>, I>>(
    object: I
  ): DiscoveredAreaInfo {
    const message = createBaseDiscoveredAreaInfo();
    message.discoveredAreaName = object.discoveredAreaName ?? "";
    message.discoveredPlaythroughs = object.discoveredPlaythroughs ?? 0;
    return message;
  },
};

function createBaseDiscoveredLevelInfo(): DiscoveredLevelInfo {
  return {
    discoveredLevelName: "",
    discoveredPlaythroughs: 0,
    discoveredAreaInfo: [],
  };
}

export const DiscoveredLevelInfo = {
  encode(
    message: DiscoveredLevelInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.discoveredLevelName !== "") {
      writer.uint32(10).string(message.discoveredLevelName);
    }
    if (message.discoveredPlaythroughs !== 0) {
      writer.uint32(24).uint32(message.discoveredPlaythroughs);
    }
    for (const v of message.discoveredAreaInfo) {
      DiscoveredAreaInfo.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiscoveredLevelInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiscoveredLevelInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.discoveredLevelName = reader.string();
          break;
        case 3:
          message.discoveredPlaythroughs = reader.uint32();
          break;
        case 4:
          message.discoveredAreaInfo.push(
            DiscoveredAreaInfo.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DiscoveredLevelInfo {
    return {
      discoveredLevelName: isSet(object.discoveredLevelName)
        ? String(object.discoveredLevelName)
        : "",
      discoveredPlaythroughs: isSet(object.discoveredPlaythroughs)
        ? Number(object.discoveredPlaythroughs)
        : 0,
      discoveredAreaInfo: Array.isArray(object?.discoveredAreaInfo)
        ? object.discoveredAreaInfo.map((e: any) =>
            DiscoveredAreaInfo.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: DiscoveredLevelInfo): unknown {
    const obj: any = {};
    message.discoveredLevelName !== undefined &&
      (obj.discoveredLevelName = message.discoveredLevelName);
    message.discoveredPlaythroughs !== undefined &&
      (obj.discoveredPlaythroughs = Math.round(message.discoveredPlaythroughs));
    if (message.discoveredAreaInfo) {
      obj.discoveredAreaInfo = message.discoveredAreaInfo.map((e) =>
        e ? DiscoveredAreaInfo.toJSON(e) : undefined
      );
    } else {
      obj.discoveredAreaInfo = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DiscoveredLevelInfo>, I>>(
    object: I
  ): DiscoveredLevelInfo {
    const message = createBaseDiscoveredLevelInfo();
    message.discoveredLevelName = object.discoveredLevelName ?? "";
    message.discoveredPlaythroughs = object.discoveredPlaythroughs ?? 0;
    message.discoveredAreaInfo =
      object.discoveredAreaInfo?.map((e) =>
        DiscoveredAreaInfo.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseDiscoveredPlanetInfo(): DiscoveredPlanetInfo {
  return { discoveredPlanet: "", isNewPlanet: false };
}

export const DiscoveredPlanetInfo = {
  encode(
    message: DiscoveredPlanetInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.discoveredPlanet !== "") {
      writer.uint32(10).string(message.discoveredPlanet);
    }
    if (message.isNewPlanet === true) {
      writer.uint32(16).bool(message.isNewPlanet);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DiscoveredPlanetInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiscoveredPlanetInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.discoveredPlanet = reader.string();
          break;
        case 2:
          message.isNewPlanet = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DiscoveredPlanetInfo {
    return {
      discoveredPlanet: isSet(object.discoveredPlanet)
        ? String(object.discoveredPlanet)
        : "",
      isNewPlanet: isSet(object.isNewPlanet)
        ? Boolean(object.isNewPlanet)
        : false,
    };
  },

  toJSON(message: DiscoveredPlanetInfo): unknown {
    const obj: any = {};
    message.discoveredPlanet !== undefined &&
      (obj.discoveredPlanet = message.discoveredPlanet);
    message.isNewPlanet !== undefined &&
      (obj.isNewPlanet = message.isNewPlanet);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DiscoveredPlanetInfo>, I>>(
    object: I
  ): DiscoveredPlanetInfo {
    const message = createBaseDiscoveredPlanetInfo();
    message.discoveredPlanet = object.discoveredPlanet ?? "";
    message.isNewPlanet = object.isNewPlanet ?? false;
    return message;
  },
};

function createBaseDiscoverySaveData(): DiscoverySaveData {
  return { discoveredLevelInfo: [] };
}

export const DiscoverySaveData = {
  encode(
    message: DiscoverySaveData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.discoveredLevelInfo) {
      DiscoveredLevelInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DiscoverySaveData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDiscoverySaveData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.discoveredLevelInfo.push(
            DiscoveredLevelInfo.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DiscoverySaveData {
    return {
      discoveredLevelInfo: Array.isArray(object?.discoveredLevelInfo)
        ? object.discoveredLevelInfo.map((e: any) =>
            DiscoveredLevelInfo.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: DiscoverySaveData): unknown {
    const obj: any = {};
    if (message.discoveredLevelInfo) {
      obj.discoveredLevelInfo = message.discoveredLevelInfo.map((e) =>
        e ? DiscoveredLevelInfo.toJSON(e) : undefined
      );
    } else {
      obj.discoveredLevelInfo = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DiscoverySaveData>, I>>(
    object: I
  ): DiscoverySaveData {
    const message = createBaseDiscoverySaveData();
    message.discoveredLevelInfo =
      object.discoveredLevelInfo?.map((e) =>
        DiscoveredLevelInfo.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseVehicleUnlockedSaveGameData(): VehicleUnlockedSaveGameData {
  return { assetPath: "", justUnlocked: false };
}

export const VehicleUnlockedSaveGameData = {
  encode(
    message: VehicleUnlockedSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.assetPath !== "") {
      writer.uint32(10).string(message.assetPath);
    }
    if (message.justUnlocked === true) {
      writer.uint32(16).bool(message.justUnlocked);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): VehicleUnlockedSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVehicleUnlockedSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetPath = reader.string();
          break;
        case 2:
          message.justUnlocked = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VehicleUnlockedSaveGameData {
    return {
      assetPath: isSet(object.assetPath) ? String(object.assetPath) : "",
      justUnlocked: isSet(object.justUnlocked)
        ? Boolean(object.justUnlocked)
        : false,
    };
  },

  toJSON(message: VehicleUnlockedSaveGameData): unknown {
    const obj: any = {};
    message.assetPath !== undefined && (obj.assetPath = message.assetPath);
    message.justUnlocked !== undefined &&
      (obj.justUnlocked = message.justUnlocked);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<VehicleUnlockedSaveGameData>, I>>(
    object: I
  ): VehicleUnlockedSaveGameData {
    const message = createBaseVehicleUnlockedSaveGameData();
    message.assetPath = object.assetPath ?? "";
    message.justUnlocked = object.justUnlocked ?? false;
    return message;
  },
};

function createBaseOakCARMenuVehicleConfigSaveData(): OakCARMenuVehicleConfigSaveData {
  return {
    loadoutSaveName: "",
    bodyAssetPath: "",
    wheelAssetPath: "",
    armorAssetPath: "",
    coreModAssetPath: "",
    gunnerWeaponAssetPath: "",
    driverWeaponAssetPath: "",
    ornamentAssetPath: "",
    materialDecalAssetPath: "",
    materialAssetPath: "",
    colorIndex1: 0,
    colorIndex2: 0,
    colorIndex3: 0,
  };
}

export const OakCARMenuVehicleConfigSaveData = {
  encode(
    message: OakCARMenuVehicleConfigSaveData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.loadoutSaveName !== "") {
      writer.uint32(10).string(message.loadoutSaveName);
    }
    if (message.bodyAssetPath !== "") {
      writer.uint32(18).string(message.bodyAssetPath);
    }
    if (message.wheelAssetPath !== "") {
      writer.uint32(26).string(message.wheelAssetPath);
    }
    if (message.armorAssetPath !== "") {
      writer.uint32(34).string(message.armorAssetPath);
    }
    if (message.coreModAssetPath !== "") {
      writer.uint32(42).string(message.coreModAssetPath);
    }
    if (message.gunnerWeaponAssetPath !== "") {
      writer.uint32(50).string(message.gunnerWeaponAssetPath);
    }
    if (message.driverWeaponAssetPath !== "") {
      writer.uint32(58).string(message.driverWeaponAssetPath);
    }
    if (message.ornamentAssetPath !== "") {
      writer.uint32(66).string(message.ornamentAssetPath);
    }
    if (message.materialDecalAssetPath !== "") {
      writer.uint32(74).string(message.materialDecalAssetPath);
    }
    if (message.materialAssetPath !== "") {
      writer.uint32(82).string(message.materialAssetPath);
    }
    if (message.colorIndex1 !== 0) {
      writer.uint32(88).int32(message.colorIndex1);
    }
    if (message.colorIndex2 !== 0) {
      writer.uint32(96).int32(message.colorIndex2);
    }
    if (message.colorIndex3 !== 0) {
      writer.uint32(104).int32(message.colorIndex3);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OakCARMenuVehicleConfigSaveData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOakCARMenuVehicleConfigSaveData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loadoutSaveName = reader.string();
          break;
        case 2:
          message.bodyAssetPath = reader.string();
          break;
        case 3:
          message.wheelAssetPath = reader.string();
          break;
        case 4:
          message.armorAssetPath = reader.string();
          break;
        case 5:
          message.coreModAssetPath = reader.string();
          break;
        case 6:
          message.gunnerWeaponAssetPath = reader.string();
          break;
        case 7:
          message.driverWeaponAssetPath = reader.string();
          break;
        case 8:
          message.ornamentAssetPath = reader.string();
          break;
        case 9:
          message.materialDecalAssetPath = reader.string();
          break;
        case 10:
          message.materialAssetPath = reader.string();
          break;
        case 11:
          message.colorIndex1 = reader.int32();
          break;
        case 12:
          message.colorIndex2 = reader.int32();
          break;
        case 13:
          message.colorIndex3 = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OakCARMenuVehicleConfigSaveData {
    return {
      loadoutSaveName: isSet(object.loadoutSaveName)
        ? String(object.loadoutSaveName)
        : "",
      bodyAssetPath: isSet(object.bodyAssetPath)
        ? String(object.bodyAssetPath)
        : "",
      wheelAssetPath: isSet(object.wheelAssetPath)
        ? String(object.wheelAssetPath)
        : "",
      armorAssetPath: isSet(object.armorAssetPath)
        ? String(object.armorAssetPath)
        : "",
      coreModAssetPath: isSet(object.coreModAssetPath)
        ? String(object.coreModAssetPath)
        : "",
      gunnerWeaponAssetPath: isSet(object.gunnerWeaponAssetPath)
        ? String(object.gunnerWeaponAssetPath)
        : "",
      driverWeaponAssetPath: isSet(object.driverWeaponAssetPath)
        ? String(object.driverWeaponAssetPath)
        : "",
      ornamentAssetPath: isSet(object.ornamentAssetPath)
        ? String(object.ornamentAssetPath)
        : "",
      materialDecalAssetPath: isSet(object.materialDecalAssetPath)
        ? String(object.materialDecalAssetPath)
        : "",
      materialAssetPath: isSet(object.materialAssetPath)
        ? String(object.materialAssetPath)
        : "",
      colorIndex1: isSet(object.colorIndex1) ? Number(object.colorIndex1) : 0,
      colorIndex2: isSet(object.colorIndex2) ? Number(object.colorIndex2) : 0,
      colorIndex3: isSet(object.colorIndex3) ? Number(object.colorIndex3) : 0,
    };
  },

  toJSON(message: OakCARMenuVehicleConfigSaveData): unknown {
    const obj: any = {};
    message.loadoutSaveName !== undefined &&
      (obj.loadoutSaveName = message.loadoutSaveName);
    message.bodyAssetPath !== undefined &&
      (obj.bodyAssetPath = message.bodyAssetPath);
    message.wheelAssetPath !== undefined &&
      (obj.wheelAssetPath = message.wheelAssetPath);
    message.armorAssetPath !== undefined &&
      (obj.armorAssetPath = message.armorAssetPath);
    message.coreModAssetPath !== undefined &&
      (obj.coreModAssetPath = message.coreModAssetPath);
    message.gunnerWeaponAssetPath !== undefined &&
      (obj.gunnerWeaponAssetPath = message.gunnerWeaponAssetPath);
    message.driverWeaponAssetPath !== undefined &&
      (obj.driverWeaponAssetPath = message.driverWeaponAssetPath);
    message.ornamentAssetPath !== undefined &&
      (obj.ornamentAssetPath = message.ornamentAssetPath);
    message.materialDecalAssetPath !== undefined &&
      (obj.materialDecalAssetPath = message.materialDecalAssetPath);
    message.materialAssetPath !== undefined &&
      (obj.materialAssetPath = message.materialAssetPath);
    message.colorIndex1 !== undefined &&
      (obj.colorIndex1 = Math.round(message.colorIndex1));
    message.colorIndex2 !== undefined &&
      (obj.colorIndex2 = Math.round(message.colorIndex2));
    message.colorIndex3 !== undefined &&
      (obj.colorIndex3 = Math.round(message.colorIndex3));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OakCARMenuVehicleConfigSaveData>, I>>(
    object: I
  ): OakCARMenuVehicleConfigSaveData {
    const message = createBaseOakCARMenuVehicleConfigSaveData();
    message.loadoutSaveName = object.loadoutSaveName ?? "";
    message.bodyAssetPath = object.bodyAssetPath ?? "";
    message.wheelAssetPath = object.wheelAssetPath ?? "";
    message.armorAssetPath = object.armorAssetPath ?? "";
    message.coreModAssetPath = object.coreModAssetPath ?? "";
    message.gunnerWeaponAssetPath = object.gunnerWeaponAssetPath ?? "";
    message.driverWeaponAssetPath = object.driverWeaponAssetPath ?? "";
    message.ornamentAssetPath = object.ornamentAssetPath ?? "";
    message.materialDecalAssetPath = object.materialDecalAssetPath ?? "";
    message.materialAssetPath = object.materialAssetPath ?? "";
    message.colorIndex1 = object.colorIndex1 ?? 0;
    message.colorIndex2 = object.colorIndex2 ?? 0;
    message.colorIndex3 = object.colorIndex3 ?? 0;
    return message;
  },
};

function createBaseCustomPlayerColorSaveGameData(): CustomPlayerColorSaveGameData {
  return {
    colorParameter: "",
    appliedColor: undefined,
    splitColor: undefined,
    useDefaultColor: false,
    useDefaultSplitColor: false,
    appliedColorAlpha: 0,
    splitColorAlpha: 0,
  };
}

export const CustomPlayerColorSaveGameData = {
  encode(
    message: CustomPlayerColorSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.colorParameter !== "") {
      writer.uint32(10).string(message.colorParameter);
    }
    if (message.appliedColor !== undefined) {
      Vec3.encode(message.appliedColor, writer.uint32(18).fork()).ldelim();
    }
    if (message.splitColor !== undefined) {
      Vec3.encode(message.splitColor, writer.uint32(26).fork()).ldelim();
    }
    if (message.useDefaultColor === true) {
      writer.uint32(32).bool(message.useDefaultColor);
    }
    if (message.useDefaultSplitColor === true) {
      writer.uint32(40).bool(message.useDefaultSplitColor);
    }
    if (message.appliedColorAlpha !== 0) {
      writer.uint32(53).float(message.appliedColorAlpha);
    }
    if (message.splitColorAlpha !== 0) {
      writer.uint32(61).float(message.splitColorAlpha);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CustomPlayerColorSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomPlayerColorSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.colorParameter = reader.string();
          break;
        case 2:
          message.appliedColor = Vec3.decode(reader, reader.uint32());
          break;
        case 3:
          message.splitColor = Vec3.decode(reader, reader.uint32());
          break;
        case 4:
          message.useDefaultColor = reader.bool();
          break;
        case 5:
          message.useDefaultSplitColor = reader.bool();
          break;
        case 6:
          message.appliedColorAlpha = reader.float();
          break;
        case 7:
          message.splitColorAlpha = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CustomPlayerColorSaveGameData {
    return {
      colorParameter: isSet(object.colorParameter)
        ? String(object.colorParameter)
        : "",
      appliedColor: isSet(object.appliedColor)
        ? Vec3.fromJSON(object.appliedColor)
        : undefined,
      splitColor: isSet(object.splitColor)
        ? Vec3.fromJSON(object.splitColor)
        : undefined,
      useDefaultColor: isSet(object.useDefaultColor)
        ? Boolean(object.useDefaultColor)
        : false,
      useDefaultSplitColor: isSet(object.useDefaultSplitColor)
        ? Boolean(object.useDefaultSplitColor)
        : false,
      appliedColorAlpha: isSet(object.appliedColorAlpha)
        ? Number(object.appliedColorAlpha)
        : 0,
      splitColorAlpha: isSet(object.splitColorAlpha)
        ? Number(object.splitColorAlpha)
        : 0,
    };
  },

  toJSON(message: CustomPlayerColorSaveGameData): unknown {
    const obj: any = {};
    message.colorParameter !== undefined &&
      (obj.colorParameter = message.colorParameter);
    message.appliedColor !== undefined &&
      (obj.appliedColor = message.appliedColor
        ? Vec3.toJSON(message.appliedColor)
        : undefined);
    message.splitColor !== undefined &&
      (obj.splitColor = message.splitColor
        ? Vec3.toJSON(message.splitColor)
        : undefined);
    message.useDefaultColor !== undefined &&
      (obj.useDefaultColor = message.useDefaultColor);
    message.useDefaultSplitColor !== undefined &&
      (obj.useDefaultSplitColor = message.useDefaultSplitColor);
    message.appliedColorAlpha !== undefined &&
      (obj.appliedColorAlpha = message.appliedColorAlpha);
    message.splitColorAlpha !== undefined &&
      (obj.splitColorAlpha = message.splitColorAlpha);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CustomPlayerColorSaveGameData>, I>>(
    object: I
  ): CustomPlayerColorSaveGameData {
    const message = createBaseCustomPlayerColorSaveGameData();
    message.colorParameter = object.colorParameter ?? "";
    message.appliedColor =
      object.appliedColor !== undefined && object.appliedColor !== null
        ? Vec3.fromPartial(object.appliedColor)
        : undefined;
    message.splitColor =
      object.splitColor !== undefined && object.splitColor !== null
        ? Vec3.fromPartial(object.splitColor)
        : undefined;
    message.useDefaultColor = object.useDefaultColor ?? false;
    message.useDefaultSplitColor = object.useDefaultSplitColor ?? false;
    message.appliedColorAlpha = object.appliedColorAlpha ?? 0;
    message.splitColorAlpha = object.splitColorAlpha ?? 0;
    return message;
  },
};

function createBaseCustomFloatCustomizationSaveGameData(): CustomFloatCustomizationSaveGameData {
  return { name: "", value: 0 };
}

export const CustomFloatCustomizationSaveGameData = {
  encode(
    message: CustomFloatCustomizationSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.value !== 0) {
      writer.uint32(21).float(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CustomFloatCustomizationSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomFloatCustomizationSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.value = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CustomFloatCustomizationSaveGameData {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      value: isSet(object.value) ? Number(object.value) : 0,
    };
  },

  toJSON(message: CustomFloatCustomizationSaveGameData): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<CustomFloatCustomizationSaveGameData>, I>
  >(object: I): CustomFloatCustomizationSaveGameData {
    const message = createBaseCustomFloatCustomizationSaveGameData();
    message.name = object.name ?? "";
    message.value = object.value ?? 0;
    return message;
  },
};

function createBaseEchoLogSaveGameData(): EchoLogSaveGameData {
  return { hasBeenSeenInLog: false, echoLogPath: "" };
}

export const EchoLogSaveGameData = {
  encode(
    message: EchoLogSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hasBeenSeenInLog === true) {
      writer.uint32(8).bool(message.hasBeenSeenInLog);
    }
    if (message.echoLogPath !== "") {
      writer.uint32(18).string(message.echoLogPath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EchoLogSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEchoLogSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hasBeenSeenInLog = reader.bool();
          break;
        case 2:
          message.echoLogPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EchoLogSaveGameData {
    return {
      hasBeenSeenInLog: isSet(object.hasBeenSeenInLog)
        ? Boolean(object.hasBeenSeenInLog)
        : false,
      echoLogPath: isSet(object.echoLogPath) ? String(object.echoLogPath) : "",
    };
  },

  toJSON(message: EchoLogSaveGameData): unknown {
    const obj: any = {};
    message.hasBeenSeenInLog !== undefined &&
      (obj.hasBeenSeenInLog = message.hasBeenSeenInLog);
    message.echoLogPath !== undefined &&
      (obj.echoLogPath = message.echoLogPath);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EchoLogSaveGameData>, I>>(
    object: I
  ): EchoLogSaveGameData {
    const message = createBaseEchoLogSaveGameData();
    message.hasBeenSeenInLog = object.hasBeenSeenInLog ?? false;
    message.echoLogPath = object.echoLogPath ?? "";
    return message;
  },
};

function createBaseMapIDData(): MapIDData {
  return { zoneNameId: 0, mapNameId: 0 };
}

export const MapIDData = {
  encode(
    message: MapIDData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.zoneNameId !== 0) {
      writer.uint32(8).uint32(message.zoneNameId);
    }
    if (message.mapNameId !== 0) {
      writer.uint32(16).uint32(message.mapNameId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MapIDData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMapIDData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.zoneNameId = reader.uint32();
          break;
        case 2:
          message.mapNameId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MapIDData {
    return {
      zoneNameId: isSet(object.zoneNameId) ? Number(object.zoneNameId) : 0,
      mapNameId: isSet(object.mapNameId) ? Number(object.mapNameId) : 0,
    };
  },

  toJSON(message: MapIDData): unknown {
    const obj: any = {};
    message.zoneNameId !== undefined &&
      (obj.zoneNameId = Math.round(message.zoneNameId));
    message.mapNameId !== undefined &&
      (obj.mapNameId = Math.round(message.mapNameId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MapIDData>, I>>(
    object: I
  ): MapIDData {
    const message = createBaseMapIDData();
    message.zoneNameId = object.zoneNameId ?? 0;
    message.mapNameId = object.mapNameId ?? 0;
    return message;
  },
};

function createBaseGameStateSaveData(): GameStateSaveData {
  return {
    lastTraveledMapId: undefined,
    mayhemLevel: 0,
    mayhemRandomSeed: 0,
    mayhemUnlockedLevel: 0,
  };
}

export const GameStateSaveData = {
  encode(
    message: GameStateSaveData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lastTraveledMapId !== undefined) {
      MapIDData.encode(
        message.lastTraveledMapId,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.mayhemLevel !== 0) {
      writer.uint32(16).int32(message.mayhemLevel);
    }
    if (message.mayhemRandomSeed !== 0) {
      writer.uint32(24).int32(message.mayhemRandomSeed);
    }
    if (message.mayhemUnlockedLevel !== 0) {
      writer.uint32(32).int32(message.mayhemUnlockedLevel);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GameStateSaveData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameStateSaveData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastTraveledMapId = MapIDData.decode(reader, reader.uint32());
          break;
        case 2:
          message.mayhemLevel = reader.int32();
          break;
        case 3:
          message.mayhemRandomSeed = reader.int32();
          break;
        case 4:
          message.mayhemUnlockedLevel = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameStateSaveData {
    return {
      lastTraveledMapId: isSet(object.lastTraveledMapId)
        ? MapIDData.fromJSON(object.lastTraveledMapId)
        : undefined,
      mayhemLevel: isSet(object.mayhemLevel) ? Number(object.mayhemLevel) : 0,
      mayhemRandomSeed: isSet(object.mayhemRandomSeed)
        ? Number(object.mayhemRandomSeed)
        : 0,
      mayhemUnlockedLevel: isSet(object.mayhemUnlockedLevel)
        ? Number(object.mayhemUnlockedLevel)
        : 0,
    };
  },

  toJSON(message: GameStateSaveData): unknown {
    const obj: any = {};
    message.lastTraveledMapId !== undefined &&
      (obj.lastTraveledMapId = message.lastTraveledMapId
        ? MapIDData.toJSON(message.lastTraveledMapId)
        : undefined);
    message.mayhemLevel !== undefined &&
      (obj.mayhemLevel = Math.round(message.mayhemLevel));
    message.mayhemRandomSeed !== undefined &&
      (obj.mayhemRandomSeed = Math.round(message.mayhemRandomSeed));
    message.mayhemUnlockedLevel !== undefined &&
      (obj.mayhemUnlockedLevel = Math.round(message.mayhemUnlockedLevel));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GameStateSaveData>, I>>(
    object: I
  ): GameStateSaveData {
    const message = createBaseGameStateSaveData();
    message.lastTraveledMapId =
      object.lastTraveledMapId !== undefined &&
      object.lastTraveledMapId !== null
        ? MapIDData.fromPartial(object.lastTraveledMapId)
        : undefined;
    message.mayhemLevel = object.mayhemLevel ?? 0;
    message.mayhemRandomSeed = object.mayhemRandomSeed ?? 0;
    message.mayhemUnlockedLevel = object.mayhemUnlockedLevel ?? 0;
    return message;
  },
};

function createBaseChallengeCategoryProgressSaveData(): ChallengeCategoryProgressSaveData {
  return { categoryProgress: new Uint8Array() };
}

export const ChallengeCategoryProgressSaveData = {
  encode(
    message: ChallengeCategoryProgressSaveData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.categoryProgress.length !== 0) {
      writer.uint32(10).bytes(message.categoryProgress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ChallengeCategoryProgressSaveData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengeCategoryProgressSaveData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.categoryProgress = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChallengeCategoryProgressSaveData {
    return {
      categoryProgress: isSet(object.categoryProgress)
        ? bytesFromBase64(object.categoryProgress)
        : new Uint8Array(),
    };
  },

  toJSON(message: ChallengeCategoryProgressSaveData): unknown {
    const obj: any = {};
    message.categoryProgress !== undefined &&
      (obj.categoryProgress = base64FromBytes(
        message.categoryProgress !== undefined
          ? message.categoryProgress
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ChallengeCategoryProgressSaveData>, I>
  >(object: I): ChallengeCategoryProgressSaveData {
    const message = createBaseChallengeCategoryProgressSaveData();
    message.categoryProgress = object.categoryProgress ?? new Uint8Array();
    return message;
  },
};

function createBaseOakPlayerCharacterAugmentSaveGameData(): OakPlayerCharacterAugmentSaveGameData {
  return { slotAssetPath: "", augmentAssetPath: "" };
}

export const OakPlayerCharacterAugmentSaveGameData = {
  encode(
    message: OakPlayerCharacterAugmentSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.slotAssetPath !== "") {
      writer.uint32(10).string(message.slotAssetPath);
    }
    if (message.augmentAssetPath !== "") {
      writer.uint32(18).string(message.augmentAssetPath);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OakPlayerCharacterAugmentSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOakPlayerCharacterAugmentSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slotAssetPath = reader.string();
          break;
        case 2:
          message.augmentAssetPath = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OakPlayerCharacterAugmentSaveGameData {
    return {
      slotAssetPath: isSet(object.slotAssetPath)
        ? String(object.slotAssetPath)
        : "",
      augmentAssetPath: isSet(object.augmentAssetPath)
        ? String(object.augmentAssetPath)
        : "",
    };
  },

  toJSON(message: OakPlayerCharacterAugmentSaveGameData): unknown {
    const obj: any = {};
    message.slotAssetPath !== undefined &&
      (obj.slotAssetPath = message.slotAssetPath);
    message.augmentAssetPath !== undefined &&
      (obj.augmentAssetPath = message.augmentAssetPath);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<OakPlayerCharacterAugmentSaveGameData>, I>
  >(object: I): OakPlayerCharacterAugmentSaveGameData {
    const message = createBaseOakPlayerCharacterAugmentSaveGameData();
    message.slotAssetPath = object.slotAssetPath ?? "";
    message.augmentAssetPath = object.augmentAssetPath ?? "";
    return message;
  },
};

function createBaseOakPlayerCharacterSlotSaveGameData(): OakPlayerCharacterSlotSaveGameData {
  return { augmentSlotList: [] };
}

export const OakPlayerCharacterSlotSaveGameData = {
  encode(
    message: OakPlayerCharacterSlotSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.augmentSlotList) {
      OakPlayerCharacterAugmentSaveGameData.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OakPlayerCharacterSlotSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOakPlayerCharacterSlotSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.augmentSlotList.push(
            OakPlayerCharacterAugmentSaveGameData.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OakPlayerCharacterSlotSaveGameData {
    return {
      augmentSlotList: Array.isArray(object?.augmentSlotList)
        ? object.augmentSlotList.map((e: any) =>
            OakPlayerCharacterAugmentSaveGameData.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: OakPlayerCharacterSlotSaveGameData): unknown {
    const obj: any = {};
    if (message.augmentSlotList) {
      obj.augmentSlotList = message.augmentSlotList.map((e) =>
        e ? OakPlayerCharacterAugmentSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.augmentSlotList = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<OakPlayerCharacterSlotSaveGameData>, I>
  >(object: I): OakPlayerCharacterSlotSaveGameData {
    const message = createBaseOakPlayerCharacterSlotSaveGameData();
    message.augmentSlotList =
      object.augmentSlotList?.map((e) =>
        OakPlayerCharacterAugmentSaveGameData.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseUITrackingSaveGameData(): UITrackingSaveGameData {
  return {
    hasSeenSkillMenuUnlock: false,
    hasSeenEchoBootAmmoBar: false,
    hasSeenEchoBootShieldBar: false,
    hasSeenEchoBootGrenades: false,
    highestThvmBreadcrumbSeen: 0,
    inventorySlotUnlocksSeen: [],
    savedSpinOffset: 0,
  };
}

export const UITrackingSaveGameData = {
  encode(
    message: UITrackingSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hasSeenSkillMenuUnlock === true) {
      writer.uint32(8).bool(message.hasSeenSkillMenuUnlock);
    }
    if (message.hasSeenEchoBootAmmoBar === true) {
      writer.uint32(24).bool(message.hasSeenEchoBootAmmoBar);
    }
    if (message.hasSeenEchoBootShieldBar === true) {
      writer.uint32(32).bool(message.hasSeenEchoBootShieldBar);
    }
    if (message.hasSeenEchoBootGrenades === true) {
      writer.uint32(40).bool(message.hasSeenEchoBootGrenades);
    }
    if (message.highestThvmBreadcrumbSeen !== 0) {
      writer.uint32(48).int32(message.highestThvmBreadcrumbSeen);
    }
    for (const v of message.inventorySlotUnlocksSeen) {
      writer.uint32(58).string(v!);
    }
    if (message.savedSpinOffset !== 0) {
      writer.uint32(64).int32(message.savedSpinOffset);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UITrackingSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUITrackingSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hasSeenSkillMenuUnlock = reader.bool();
          break;
        case 3:
          message.hasSeenEchoBootAmmoBar = reader.bool();
          break;
        case 4:
          message.hasSeenEchoBootShieldBar = reader.bool();
          break;
        case 5:
          message.hasSeenEchoBootGrenades = reader.bool();
          break;
        case 6:
          message.highestThvmBreadcrumbSeen = reader.int32();
          break;
        case 7:
          message.inventorySlotUnlocksSeen.push(reader.string());
          break;
        case 8:
          message.savedSpinOffset = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UITrackingSaveGameData {
    return {
      hasSeenSkillMenuUnlock: isSet(object.hasSeenSkillMenuUnlock)
        ? Boolean(object.hasSeenSkillMenuUnlock)
        : false,
      hasSeenEchoBootAmmoBar: isSet(object.hasSeenEchoBootAmmoBar)
        ? Boolean(object.hasSeenEchoBootAmmoBar)
        : false,
      hasSeenEchoBootShieldBar: isSet(object.hasSeenEchoBootShieldBar)
        ? Boolean(object.hasSeenEchoBootShieldBar)
        : false,
      hasSeenEchoBootGrenades: isSet(object.hasSeenEchoBootGrenades)
        ? Boolean(object.hasSeenEchoBootGrenades)
        : false,
      highestThvmBreadcrumbSeen: isSet(object.highestThvmBreadcrumbSeen)
        ? Number(object.highestThvmBreadcrumbSeen)
        : 0,
      inventorySlotUnlocksSeen: Array.isArray(object?.inventorySlotUnlocksSeen)
        ? object.inventorySlotUnlocksSeen.map((e: any) => String(e))
        : [],
      savedSpinOffset: isSet(object.savedSpinOffset)
        ? Number(object.savedSpinOffset)
        : 0,
    };
  },

  toJSON(message: UITrackingSaveGameData): unknown {
    const obj: any = {};
    message.hasSeenSkillMenuUnlock !== undefined &&
      (obj.hasSeenSkillMenuUnlock = message.hasSeenSkillMenuUnlock);
    message.hasSeenEchoBootAmmoBar !== undefined &&
      (obj.hasSeenEchoBootAmmoBar = message.hasSeenEchoBootAmmoBar);
    message.hasSeenEchoBootShieldBar !== undefined &&
      (obj.hasSeenEchoBootShieldBar = message.hasSeenEchoBootShieldBar);
    message.hasSeenEchoBootGrenades !== undefined &&
      (obj.hasSeenEchoBootGrenades = message.hasSeenEchoBootGrenades);
    message.highestThvmBreadcrumbSeen !== undefined &&
      (obj.highestThvmBreadcrumbSeen = Math.round(
        message.highestThvmBreadcrumbSeen
      ));
    if (message.inventorySlotUnlocksSeen) {
      obj.inventorySlotUnlocksSeen = message.inventorySlotUnlocksSeen.map(
        (e) => e
      );
    } else {
      obj.inventorySlotUnlocksSeen = [];
    }
    message.savedSpinOffset !== undefined &&
      (obj.savedSpinOffset = Math.round(message.savedSpinOffset));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UITrackingSaveGameData>, I>>(
    object: I
  ): UITrackingSaveGameData {
    const message = createBaseUITrackingSaveGameData();
    message.hasSeenSkillMenuUnlock = object.hasSeenSkillMenuUnlock ?? false;
    message.hasSeenEchoBootAmmoBar = object.hasSeenEchoBootAmmoBar ?? false;
    message.hasSeenEchoBootShieldBar = object.hasSeenEchoBootShieldBar ?? false;
    message.hasSeenEchoBootGrenades = object.hasSeenEchoBootGrenades ?? false;
    message.highestThvmBreadcrumbSeen = object.highestThvmBreadcrumbSeen ?? 0;
    message.inventorySlotUnlocksSeen =
      object.inventorySlotUnlocksSeen?.map((e) => e) || [];
    message.savedSpinOffset = object.savedSpinOffset ?? 0;
    return message;
  },
};

function createBasePlanetCycleInfo(): PlanetCycleInfo {
  return { planetName: "", cycleLength: 0, lastCachedTime: 0 };
}

export const PlanetCycleInfo = {
  encode(
    message: PlanetCycleInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.planetName !== "") {
      writer.uint32(10).string(message.planetName);
    }
    if (message.cycleLength !== 0) {
      writer.uint32(21).float(message.cycleLength);
    }
    if (message.lastCachedTime !== 0) {
      writer.uint32(29).float(message.lastCachedTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlanetCycleInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlanetCycleInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.planetName = reader.string();
          break;
        case 2:
          message.cycleLength = reader.float();
          break;
        case 3:
          message.lastCachedTime = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlanetCycleInfo {
    return {
      planetName: isSet(object.planetName) ? String(object.planetName) : "",
      cycleLength: isSet(object.cycleLength) ? Number(object.cycleLength) : 0,
      lastCachedTime: isSet(object.lastCachedTime)
        ? Number(object.lastCachedTime)
        : 0,
    };
  },

  toJSON(message: PlanetCycleInfo): unknown {
    const obj: any = {};
    message.planetName !== undefined && (obj.planetName = message.planetName);
    message.cycleLength !== undefined &&
      (obj.cycleLength = message.cycleLength);
    message.lastCachedTime !== undefined &&
      (obj.lastCachedTime = message.lastCachedTime);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlanetCycleInfo>, I>>(
    object: I
  ): PlanetCycleInfo {
    const message = createBasePlanetCycleInfo();
    message.planetName = object.planetName ?? "";
    message.cycleLength = object.cycleLength ?? 0;
    message.lastCachedTime = object.lastCachedTime ?? 0;
    return message;
  },
};

function createBaseTimeOfDaySaveGameData(): TimeOfDaySaveGameData {
  return { planetCycleInfo: [], planetCycle: "" };
}

export const TimeOfDaySaveGameData = {
  encode(
    message: TimeOfDaySaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.planetCycleInfo) {
      PlanetCycleInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.planetCycle !== "") {
      writer.uint32(18).string(message.planetCycle);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TimeOfDaySaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeOfDaySaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.planetCycleInfo.push(
            PlanetCycleInfo.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.planetCycle = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TimeOfDaySaveGameData {
    return {
      planetCycleInfo: Array.isArray(object?.planetCycleInfo)
        ? object.planetCycleInfo.map((e: any) => PlanetCycleInfo.fromJSON(e))
        : [],
      planetCycle: isSet(object.planetCycle) ? String(object.planetCycle) : "",
    };
  },

  toJSON(message: TimeOfDaySaveGameData): unknown {
    const obj: any = {};
    if (message.planetCycleInfo) {
      obj.planetCycleInfo = message.planetCycleInfo.map((e) =>
        e ? PlanetCycleInfo.toJSON(e) : undefined
      );
    } else {
      obj.planetCycleInfo = [];
    }
    message.planetCycle !== undefined &&
      (obj.planetCycle = message.planetCycle);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TimeOfDaySaveGameData>, I>>(
    object: I
  ): TimeOfDaySaveGameData {
    const message = createBaseTimeOfDaySaveGameData();
    message.planetCycleInfo =
      object.planetCycleInfo?.map((e) => PlanetCycleInfo.fromPartial(e)) || [];
    message.planetCycle = object.planetCycle ?? "";
    return message;
  },
};

function createBaseLevelPersistenceActorSaveGameData(): LevelPersistenceActorSaveGameData {
  return { actorName: "", timerRemaining: 0 };
}

export const LevelPersistenceActorSaveGameData = {
  encode(
    message: LevelPersistenceActorSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.actorName !== "") {
      writer.uint32(10).string(message.actorName);
    }
    if (message.timerRemaining !== 0) {
      writer.uint32(16).int32(message.timerRemaining);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LevelPersistenceActorSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLevelPersistenceActorSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actorName = reader.string();
          break;
        case 2:
          message.timerRemaining = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LevelPersistenceActorSaveGameData {
    return {
      actorName: isSet(object.actorName) ? String(object.actorName) : "",
      timerRemaining: isSet(object.timerRemaining)
        ? Number(object.timerRemaining)
        : 0,
    };
  },

  toJSON(message: LevelPersistenceActorSaveGameData): unknown {
    const obj: any = {};
    message.actorName !== undefined && (obj.actorName = message.actorName);
    message.timerRemaining !== undefined &&
      (obj.timerRemaining = Math.round(message.timerRemaining));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<LevelPersistenceActorSaveGameData>, I>
  >(object: I): LevelPersistenceActorSaveGameData {
    const message = createBaseLevelPersistenceActorSaveGameData();
    message.actorName = object.actorName ?? "";
    message.timerRemaining = object.timerRemaining ?? 0;
    return message;
  },
};

function createBaseLevelPersistenceLevelSaveGameData(): LevelPersistenceLevelSaveGameData {
  return { levelName: "", savedActors: [] };
}

export const LevelPersistenceLevelSaveGameData = {
  encode(
    message: LevelPersistenceLevelSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.levelName !== "") {
      writer.uint32(10).string(message.levelName);
    }
    for (const v of message.savedActors) {
      LevelPersistenceActorSaveGameData.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LevelPersistenceLevelSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLevelPersistenceLevelSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.levelName = reader.string();
          break;
        case 2:
          message.savedActors.push(
            LevelPersistenceActorSaveGameData.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LevelPersistenceLevelSaveGameData {
    return {
      levelName: isSet(object.levelName) ? String(object.levelName) : "",
      savedActors: Array.isArray(object?.savedActors)
        ? object.savedActors.map((e: any) =>
            LevelPersistenceActorSaveGameData.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: LevelPersistenceLevelSaveGameData): unknown {
    const obj: any = {};
    message.levelName !== undefined && (obj.levelName = message.levelName);
    if (message.savedActors) {
      obj.savedActors = message.savedActors.map((e) =>
        e ? LevelPersistenceActorSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.savedActors = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<LevelPersistenceLevelSaveGameData>, I>
  >(object: I): LevelPersistenceLevelSaveGameData {
    const message = createBaseLevelPersistenceLevelSaveGameData();
    message.levelName = object.levelName ?? "";
    message.savedActors =
      object.savedActors?.map((e) =>
        LevelPersistenceActorSaveGameData.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseGbxZoneMapFODSavedLevelData(): GbxZoneMapFODSavedLevelData {
  return {
    levelName: "",
    fodTextureSize: 0,
    numChunks: 0,
    discoveryPercentage: 0,
    dataState: 0,
    dataRevision: 0,
    fodData: new Uint8Array(),
  };
}

export const GbxZoneMapFODSavedLevelData = {
  encode(
    message: GbxZoneMapFODSavedLevelData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.levelName !== "") {
      writer.uint32(10).string(message.levelName);
    }
    if (message.fodTextureSize !== 0) {
      writer.uint32(16).uint32(message.fodTextureSize);
    }
    if (message.numChunks !== 0) {
      writer.uint32(24).uint32(message.numChunks);
    }
    if (message.discoveryPercentage !== 0) {
      writer.uint32(37).float(message.discoveryPercentage);
    }
    if (message.dataState !== 0) {
      writer.uint32(40).uint32(message.dataState);
    }
    if (message.dataRevision !== 0) {
      writer.uint32(48).uint32(message.dataRevision);
    }
    if (message.fodData.length !== 0) {
      writer.uint32(58).bytes(message.fodData);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GbxZoneMapFODSavedLevelData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGbxZoneMapFODSavedLevelData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.levelName = reader.string();
          break;
        case 2:
          message.fodTextureSize = reader.uint32();
          break;
        case 3:
          message.numChunks = reader.uint32();
          break;
        case 4:
          message.discoveryPercentage = reader.float();
          break;
        case 5:
          message.dataState = reader.uint32();
          break;
        case 6:
          message.dataRevision = reader.uint32();
          break;
        case 7:
          message.fodData = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GbxZoneMapFODSavedLevelData {
    return {
      levelName: isSet(object.levelName) ? String(object.levelName) : "",
      fodTextureSize: isSet(object.fodTextureSize)
        ? Number(object.fodTextureSize)
        : 0,
      numChunks: isSet(object.numChunks) ? Number(object.numChunks) : 0,
      discoveryPercentage: isSet(object.discoveryPercentage)
        ? Number(object.discoveryPercentage)
        : 0,
      dataState: isSet(object.dataState) ? Number(object.dataState) : 0,
      dataRevision: isSet(object.dataRevision)
        ? Number(object.dataRevision)
        : 0,
      fodData: isSet(object.fodData)
        ? bytesFromBase64(object.fodData)
        : new Uint8Array(),
    };
  },

  toJSON(message: GbxZoneMapFODSavedLevelData): unknown {
    const obj: any = {};
    message.levelName !== undefined && (obj.levelName = message.levelName);
    message.fodTextureSize !== undefined &&
      (obj.fodTextureSize = Math.round(message.fodTextureSize));
    message.numChunks !== undefined &&
      (obj.numChunks = Math.round(message.numChunks));
    message.discoveryPercentage !== undefined &&
      (obj.discoveryPercentage = message.discoveryPercentage);
    message.dataState !== undefined &&
      (obj.dataState = Math.round(message.dataState));
    message.dataRevision !== undefined &&
      (obj.dataRevision = Math.round(message.dataRevision));
    message.fodData !== undefined &&
      (obj.fodData = base64FromBytes(
        message.fodData !== undefined ? message.fodData : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GbxZoneMapFODSavedLevelData>, I>>(
    object: I
  ): GbxZoneMapFODSavedLevelData {
    const message = createBaseGbxZoneMapFODSavedLevelData();
    message.levelName = object.levelName ?? "";
    message.fodTextureSize = object.fodTextureSize ?? 0;
    message.numChunks = object.numChunks ?? 0;
    message.discoveryPercentage = object.discoveryPercentage ?? 0;
    message.dataState = object.dataState ?? 0;
    message.dataRevision = object.dataRevision ?? 0;
    message.fodData = object.fodData ?? new Uint8Array();
    return message;
  },
};

function createBaseGbxZoneMapFODSaveGameData(): GbxZoneMapFODSaveGameData {
  return { levelData: [] };
}

export const GbxZoneMapFODSaveGameData = {
  encode(
    message: GbxZoneMapFODSaveGameData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.levelData) {
      GbxZoneMapFODSavedLevelData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GbxZoneMapFODSaveGameData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGbxZoneMapFODSaveGameData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.levelData.push(
            GbxZoneMapFODSavedLevelData.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GbxZoneMapFODSaveGameData {
    return {
      levelData: Array.isArray(object?.levelData)
        ? object.levelData.map((e: any) =>
            GbxZoneMapFODSavedLevelData.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: GbxZoneMapFODSaveGameData): unknown {
    const obj: any = {};
    if (message.levelData) {
      obj.levelData = message.levelData.map((e) =>
        e ? GbxZoneMapFODSavedLevelData.toJSON(e) : undefined
      );
    } else {
      obj.levelData = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GbxZoneMapFODSaveGameData>, I>>(
    object: I
  ): GbxZoneMapFODSaveGameData {
    const message = createBaseGbxZoneMapFODSaveGameData();
    message.levelData =
      object.levelData?.map((e) =>
        GbxZoneMapFODSavedLevelData.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseHeroPointsSaveData(): HeroPointsSaveData {
  return {
    strength: 0,
    dexterity: 0,
    intelligence: 0,
    wisdom: 0,
    constitution: 0,
    luck: 0,
    playerAspectDataPath: "",
    respecCount: 0,
  };
}

export const HeroPointsSaveData = {
  encode(
    message: HeroPointsSaveData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.strength !== 0) {
      writer.uint32(8).uint32(message.strength);
    }
    if (message.dexterity !== 0) {
      writer.uint32(16).uint32(message.dexterity);
    }
    if (message.intelligence !== 0) {
      writer.uint32(24).uint32(message.intelligence);
    }
    if (message.wisdom !== 0) {
      writer.uint32(32).uint32(message.wisdom);
    }
    if (message.constitution !== 0) {
      writer.uint32(40).uint32(message.constitution);
    }
    if (message.luck !== 0) {
      writer.uint32(48).uint32(message.luck);
    }
    if (message.playerAspectDataPath !== "") {
      writer.uint32(58).string(message.playerAspectDataPath);
    }
    if (message.respecCount !== 0) {
      writer.uint32(64).uint32(message.respecCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HeroPointsSaveData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeroPointsSaveData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.strength = reader.uint32();
          break;
        case 2:
          message.dexterity = reader.uint32();
          break;
        case 3:
          message.intelligence = reader.uint32();
          break;
        case 4:
          message.wisdom = reader.uint32();
          break;
        case 5:
          message.constitution = reader.uint32();
          break;
        case 6:
          message.luck = reader.uint32();
          break;
        case 7:
          message.playerAspectDataPath = reader.string();
          break;
        case 8:
          message.respecCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HeroPointsSaveData {
    return {
      strength: isSet(object.strength) ? Number(object.strength) : 0,
      dexterity: isSet(object.dexterity) ? Number(object.dexterity) : 0,
      intelligence: isSet(object.intelligence)
        ? Number(object.intelligence)
        : 0,
      wisdom: isSet(object.wisdom) ? Number(object.wisdom) : 0,
      constitution: isSet(object.constitution)
        ? Number(object.constitution)
        : 0,
      luck: isSet(object.luck) ? Number(object.luck) : 0,
      playerAspectDataPath: isSet(object.playerAspectDataPath)
        ? String(object.playerAspectDataPath)
        : "",
      respecCount: isSet(object.respecCount) ? Number(object.respecCount) : 0,
    };
  },

  toJSON(message: HeroPointsSaveData): unknown {
    const obj: any = {};
    message.strength !== undefined &&
      (obj.strength = Math.round(message.strength));
    message.dexterity !== undefined &&
      (obj.dexterity = Math.round(message.dexterity));
    message.intelligence !== undefined &&
      (obj.intelligence = Math.round(message.intelligence));
    message.wisdom !== undefined && (obj.wisdom = Math.round(message.wisdom));
    message.constitution !== undefined &&
      (obj.constitution = Math.round(message.constitution));
    message.luck !== undefined && (obj.luck = Math.round(message.luck));
    message.playerAspectDataPath !== undefined &&
      (obj.playerAspectDataPath = message.playerAspectDataPath);
    message.respecCount !== undefined &&
      (obj.respecCount = Math.round(message.respecCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HeroPointsSaveData>, I>>(
    object: I
  ): HeroPointsSaveData {
    const message = createBaseHeroPointsSaveData();
    message.strength = object.strength ?? 0;
    message.dexterity = object.dexterity ?? 0;
    message.intelligence = object.intelligence ?? 0;
    message.wisdom = object.wisdom ?? 0;
    message.constitution = object.constitution ?? 0;
    message.luck = object.luck ?? 0;
    message.playerAspectDataPath = object.playerAspectDataPath ?? "";
    message.respecCount = object.respecCount ?? 0;
    return message;
  },
};

function createBaseGuidSaveData(): GuidSaveData {
  return { A: 0, B: 0, C: 0, D: 0 };
}

export const GuidSaveData = {
  encode(
    message: GuidSaveData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.A !== 0) {
      writer.uint32(8).uint32(message.A);
    }
    if (message.B !== 0) {
      writer.uint32(16).uint32(message.B);
    }
    if (message.C !== 0) {
      writer.uint32(24).uint32(message.C);
    }
    if (message.D !== 0) {
      writer.uint32(32).uint32(message.D);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GuidSaveData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGuidSaveData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.A = reader.uint32();
          break;
        case 2:
          message.B = reader.uint32();
          break;
        case 3:
          message.C = reader.uint32();
          break;
        case 4:
          message.D = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GuidSaveData {
    return {
      A: isSet(object.A) ? Number(object.A) : 0,
      B: isSet(object.B) ? Number(object.B) : 0,
      C: isSet(object.C) ? Number(object.C) : 0,
      D: isSet(object.D) ? Number(object.D) : 0,
    };
  },

  toJSON(message: GuidSaveData): unknown {
    const obj: any = {};
    message.A !== undefined && (obj.A = Math.round(message.A));
    message.B !== undefined && (obj.B = Math.round(message.B));
    message.C !== undefined && (obj.C = Math.round(message.C));
    message.D !== undefined && (obj.D = Math.round(message.D));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GuidSaveData>, I>>(
    object: I
  ): GuidSaveData {
    const message = createBaseGuidSaveData();
    message.A = object.A ?? 0;
    message.B = object.B ?? 0;
    message.C = object.C ?? 0;
    message.D = object.D ?? 0;
    return message;
  },
};

function createBaseTrackedInteractionSaveData(): TrackedInteractionSaveData {
  return { trackedInteractionData: "", completedInstances: [] };
}

export const TrackedInteractionSaveData = {
  encode(
    message: TrackedInteractionSaveData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.trackedInteractionData !== "") {
      writer.uint32(10).string(message.trackedInteractionData);
    }
    for (const v of message.completedInstances) {
      GuidSaveData.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TrackedInteractionSaveData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrackedInteractionSaveData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trackedInteractionData = reader.string();
          break;
        case 2:
          message.completedInstances.push(
            GuidSaveData.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TrackedInteractionSaveData {
    return {
      trackedInteractionData: isSet(object.trackedInteractionData)
        ? String(object.trackedInteractionData)
        : "",
      completedInstances: Array.isArray(object?.completedInstances)
        ? object.completedInstances.map((e: any) => GuidSaveData.fromJSON(e))
        : [],
    };
  },

  toJSON(message: TrackedInteractionSaveData): unknown {
    const obj: any = {};
    message.trackedInteractionData !== undefined &&
      (obj.trackedInteractionData = message.trackedInteractionData);
    if (message.completedInstances) {
      obj.completedInstances = message.completedInstances.map((e) =>
        e ? GuidSaveData.toJSON(e) : undefined
      );
    } else {
      obj.completedInstances = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TrackedInteractionSaveData>, I>>(
    object: I
  ): TrackedInteractionSaveData {
    const message = createBaseTrackedInteractionSaveData();
    message.trackedInteractionData = object.trackedInteractionData ?? "";
    message.completedInstances =
      object.completedInstances?.map((e) => GuidSaveData.fromPartial(e)) || [];
    return message;
  },
};

function createBasePlayerVoiceSaveData(): PlayerVoiceSaveData {
  return { data: "", pitch: 0 };
}

export const PlayerVoiceSaveData = {
  encode(
    message: PlayerVoiceSaveData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== "") {
      writer.uint32(10).string(message.data);
    }
    if (message.pitch !== 0) {
      writer.uint32(21).float(message.pitch);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlayerVoiceSaveData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlayerVoiceSaveData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.string();
          break;
        case 2:
          message.pitch = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlayerVoiceSaveData {
    return {
      data: isSet(object.data) ? String(object.data) : "",
      pitch: isSet(object.pitch) ? Number(object.pitch) : 0,
    };
  },

  toJSON(message: PlayerVoiceSaveData): unknown {
    const obj: any = {};
    message.data !== undefined && (obj.data = message.data);
    message.pitch !== undefined && (obj.pitch = message.pitch);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlayerVoiceSaveData>, I>>(
    object: I
  ): PlayerVoiceSaveData {
    const message = createBasePlayerVoiceSaveData();
    message.data = object.data ?? "";
    message.pitch = object.pitch ?? 0;
    return message;
  },
};

function createBaseOakProfileCloudDataPlayerPrestige(): OakProfileCloudDataPlayerPrestige {
  return {
    hasSeenTutorial: false,
    prestigeExperience: 0,
    pointsSpentByIndexOrder: [],
  };
}

export const OakProfileCloudDataPlayerPrestige = {
  encode(
    message: OakProfileCloudDataPlayerPrestige,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hasSeenTutorial === true) {
      writer.uint32(8).bool(message.hasSeenTutorial);
    }
    if (message.prestigeExperience !== 0) {
      writer.uint32(16).int64(message.prestigeExperience);
    }
    writer.uint32(26).fork();
    for (const v of message.pointsSpentByIndexOrder) {
      writer.int32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): OakProfileCloudDataPlayerPrestige {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOakProfileCloudDataPlayerPrestige();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hasSeenTutorial = reader.bool();
          break;
        case 2:
          message.prestigeExperience = longToNumber(reader.int64() as Long);
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OakProfileCloudDataPlayerPrestige {
    return {
      hasSeenTutorial: isSet(object.hasSeenTutorial)
        ? Boolean(object.hasSeenTutorial)
        : false,
      prestigeExperience: isSet(object.prestigeExperience)
        ? Number(object.prestigeExperience)
        : 0,
      pointsSpentByIndexOrder: Array.isArray(object?.pointsSpentByIndexOrder)
        ? object.pointsSpentByIndexOrder.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: OakProfileCloudDataPlayerPrestige): unknown {
    const obj: any = {};
    message.hasSeenTutorial !== undefined &&
      (obj.hasSeenTutorial = message.hasSeenTutorial);
    message.prestigeExperience !== undefined &&
      (obj.prestigeExperience = Math.round(message.prestigeExperience));
    if (message.pointsSpentByIndexOrder) {
      obj.pointsSpentByIndexOrder = message.pointsSpentByIndexOrder.map((e) =>
        Math.round(e)
      );
    } else {
      obj.pointsSpentByIndexOrder = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<OakProfileCloudDataPlayerPrestige>, I>
  >(object: I): OakProfileCloudDataPlayerPrestige {
    const message = createBaseOakProfileCloudDataPlayerPrestige();
    message.hasSeenTutorial = object.hasSeenTutorial ?? false;
    message.prestigeExperience = object.prestigeExperience ?? 0;
    message.pointsSpentByIndexOrder =
      object.pointsSpentByIndexOrder?.map((e) => e) || [];
    return message;
  },
};

function createBaseOakProfileCloudData(): OakProfileCloudData {
  return {
    profileStatsData: [],
    lostLootInventoryList: [],
    npcMailItems: [],
    profileSduList: [],
    unlockedCustomizations: [],
    unlockedInventoryCustomizationParts: [],
    challengeData: [],
    mailGuids: [],
    bankInventoryList: [],
    difficulty: 0,
    playerPrestige: undefined,
  };
}

export const OakProfileCloudData = {
  encode(
    message: OakProfileCloudData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.profileStatsData) {
      GameStatSaveGameData.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.lostLootInventoryList) {
      writer.uint32(26).bytes(v!);
    }
    for (const v of message.npcMailItems) {
      OakMailItem.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.profileSduList) {
      OakSDUSaveGameData.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.unlockedCustomizations) {
      OakCustomizationSaveGameData.encode(
        v!,
        writer.uint32(50).fork()
      ).ldelim();
    }
    for (const v of message.unlockedInventoryCustomizationParts) {
      OakInventoryCustomizationPartInfo.encode(
        v!,
        writer.uint32(58).fork()
      ).ldelim();
    }
    for (const v of message.challengeData) {
      ChallengeSaveGameData.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.mailGuids) {
      writer.uint32(98).string(v!);
    }
    for (const v of message.bankInventoryList) {
      OakInventoryItemSaveGameData.encode(
        v!,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.difficulty !== 0) {
      writer.uint32(112).uint32(message.difficulty);
    }
    if (message.playerPrestige !== undefined) {
      OakProfileCloudDataPlayerPrestige.encode(
        message.playerPrestige,
        writer.uint32(122).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OakProfileCloudData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOakProfileCloudData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profileStatsData.push(
            GameStatSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.lostLootInventoryList.push(reader.bytes());
          break;
        case 4:
          message.npcMailItems.push(
            OakMailItem.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.profileSduList.push(
            OakSDUSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.unlockedCustomizations.push(
            OakCustomizationSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.unlockedInventoryCustomizationParts.push(
            OakInventoryCustomizationPartInfo.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.challengeData.push(
            ChallengeSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.mailGuids.push(reader.string());
          break;
        case 13:
          message.bankInventoryList.push(
            OakInventoryItemSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 14:
          message.difficulty = reader.uint32();
          break;
        case 15:
          message.playerPrestige = OakProfileCloudDataPlayerPrestige.decode(
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

  fromJSON(object: any): OakProfileCloudData {
    return {
      profileStatsData: Array.isArray(object?.profileStatsData)
        ? object.profileStatsData.map((e: any) =>
            GameStatSaveGameData.fromJSON(e)
          )
        : [],
      lostLootInventoryList: Array.isArray(object?.lostLootInventoryList)
        ? object.lostLootInventoryList.map((e: any) => bytesFromBase64(e))
        : [],
      npcMailItems: Array.isArray(object?.npcMailItems)
        ? object.npcMailItems.map((e: any) => OakMailItem.fromJSON(e))
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
      challengeData: Array.isArray(object?.challengeData)
        ? object.challengeData.map((e: any) =>
            ChallengeSaveGameData.fromJSON(e)
          )
        : [],
      mailGuids: Array.isArray(object?.mailGuids)
        ? object.mailGuids.map((e: any) => String(e))
        : [],
      bankInventoryList: Array.isArray(object?.bankInventoryList)
        ? object.bankInventoryList.map((e: any) =>
            OakInventoryItemSaveGameData.fromJSON(e)
          )
        : [],
      difficulty: isSet(object.difficulty) ? Number(object.difficulty) : 0,
      playerPrestige: isSet(object.playerPrestige)
        ? OakProfileCloudDataPlayerPrestige.fromJSON(object.playerPrestige)
        : undefined,
    };
  },

  toJSON(message: OakProfileCloudData): unknown {
    const obj: any = {};
    if (message.profileStatsData) {
      obj.profileStatsData = message.profileStatsData.map((e) =>
        e ? GameStatSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.profileStatsData = [];
    }
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
    if (message.challengeData) {
      obj.challengeData = message.challengeData.map((e) =>
        e ? ChallengeSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.challengeData = [];
    }
    if (message.mailGuids) {
      obj.mailGuids = message.mailGuids.map((e) => e);
    } else {
      obj.mailGuids = [];
    }
    if (message.bankInventoryList) {
      obj.bankInventoryList = message.bankInventoryList.map((e) =>
        e ? OakInventoryItemSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.bankInventoryList = [];
    }
    message.difficulty !== undefined &&
      (obj.difficulty = Math.round(message.difficulty));
    message.playerPrestige !== undefined &&
      (obj.playerPrestige = message.playerPrestige
        ? OakProfileCloudDataPlayerPrestige.toJSON(message.playerPrestige)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OakProfileCloudData>, I>>(
    object: I
  ): OakProfileCloudData {
    const message = createBaseOakProfileCloudData();
    message.profileStatsData =
      object.profileStatsData?.map((e) =>
        GameStatSaveGameData.fromPartial(e)
      ) || [];
    message.lostLootInventoryList =
      object.lostLootInventoryList?.map((e) => e) || [];
    message.npcMailItems =
      object.npcMailItems?.map((e) => OakMailItem.fromPartial(e)) || [];
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
    message.challengeData =
      object.challengeData?.map((e) => ChallengeSaveGameData.fromPartial(e)) ||
      [];
    message.mailGuids = object.mailGuids?.map((e) => e) || [];
    message.bankInventoryList =
      object.bankInventoryList?.map((e) =>
        OakInventoryItemSaveGameData.fromPartial(e)
      ) || [];
    message.difficulty = object.difficulty ?? 0;
    message.playerPrestige =
      object.playerPrestige !== undefined && object.playerPrestige !== null
        ? OakProfileCloudDataPlayerPrestige.fromPartial(object.playerPrestige)
        : undefined;
    return message;
  },
};

function createBaseDafTownHubTravelData(): DafTownHubTravelData {
  return {
    isSet: false,
    isActive: false,
    returnTravelLocation: undefined,
    returnTravelRotation: undefined,
    returnMapName: "",
    returnStationName: "",
    returnTravelStation: "",
  };
}

export const DafTownHubTravelData = {
  encode(
    message: DafTownHubTravelData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isSet === true) {
      writer.uint32(8).bool(message.isSet);
    }
    if (message.isActive === true) {
      writer.uint32(16).bool(message.isActive);
    }
    if (message.returnTravelLocation !== undefined) {
      Vec3.encode(
        message.returnTravelLocation,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.returnTravelRotation !== undefined) {
      Vec3.encode(
        message.returnTravelRotation,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.returnMapName !== "") {
      writer.uint32(42).string(message.returnMapName);
    }
    if (message.returnStationName !== "") {
      writer.uint32(50).string(message.returnStationName);
    }
    if (message.returnTravelStation !== "") {
      writer.uint32(58).string(message.returnTravelStation);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DafTownHubTravelData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDafTownHubTravelData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isSet = reader.bool();
          break;
        case 2:
          message.isActive = reader.bool();
          break;
        case 3:
          message.returnTravelLocation = Vec3.decode(reader, reader.uint32());
          break;
        case 4:
          message.returnTravelRotation = Vec3.decode(reader, reader.uint32());
          break;
        case 5:
          message.returnMapName = reader.string();
          break;
        case 6:
          message.returnStationName = reader.string();
          break;
        case 7:
          message.returnTravelStation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DafTownHubTravelData {
    return {
      isSet: isSet(object.isSet) ? Boolean(object.isSet) : false,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
      returnTravelLocation: isSet(object.returnTravelLocation)
        ? Vec3.fromJSON(object.returnTravelLocation)
        : undefined,
      returnTravelRotation: isSet(object.returnTravelRotation)
        ? Vec3.fromJSON(object.returnTravelRotation)
        : undefined,
      returnMapName: isSet(object.returnMapName)
        ? String(object.returnMapName)
        : "",
      returnStationName: isSet(object.returnStationName)
        ? String(object.returnStationName)
        : "",
      returnTravelStation: isSet(object.returnTravelStation)
        ? String(object.returnTravelStation)
        : "",
    };
  },

  toJSON(message: DafTownHubTravelData): unknown {
    const obj: any = {};
    message.isSet !== undefined && (obj.isSet = message.isSet);
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.returnTravelLocation !== undefined &&
      (obj.returnTravelLocation = message.returnTravelLocation
        ? Vec3.toJSON(message.returnTravelLocation)
        : undefined);
    message.returnTravelRotation !== undefined &&
      (obj.returnTravelRotation = message.returnTravelRotation
        ? Vec3.toJSON(message.returnTravelRotation)
        : undefined);
    message.returnMapName !== undefined &&
      (obj.returnMapName = message.returnMapName);
    message.returnStationName !== undefined &&
      (obj.returnStationName = message.returnStationName);
    message.returnTravelStation !== undefined &&
      (obj.returnTravelStation = message.returnTravelStation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DafTownHubTravelData>, I>>(
    object: I
  ): DafTownHubTravelData {
    const message = createBaseDafTownHubTravelData();
    message.isSet = object.isSet ?? false;
    message.isActive = object.isActive ?? false;
    message.returnTravelLocation =
      object.returnTravelLocation !== undefined &&
      object.returnTravelLocation !== null
        ? Vec3.fromPartial(object.returnTravelLocation)
        : undefined;
    message.returnTravelRotation =
      object.returnTravelRotation !== undefined &&
      object.returnTravelRotation !== null
        ? Vec3.fromPartial(object.returnTravelRotation)
        : undefined;
    message.returnMapName = object.returnMapName ?? "";
    message.returnStationName = object.returnStationName ?? "";
    message.returnTravelStation = object.returnTravelStation ?? "";
    return message;
  },
};

function createBaseCharacter(): Character {
  return {
    saveGameId: 0,
    lastSaveTimestamp: 0,
    timePlayedSeconds: 0,
    playerClassData: undefined,
    resourcePools: [],
    savedRegions: [],
    experiencePoints: 0,
    gameStatsData: [],
    inventoryCategoryList: [],
    inventoryItems: [],
    equippedInventoryList: [],
    activeWeaponList: [],
    abilityData: undefined,
    lastPlayThroughIndex: 0,
    playthroughsCompleted: 0,
    showNewPlaythroughNotification: false,
    missionPlaythroughsData: [],
    lastActiveTravelStationForPlaythrough: [],
    gameStateSaveDataForPlaythrough: [],
    registeredDownloadableEntitlements: [],
    activeTravelStationsForPlaythrough: [],
    discoveryData: undefined,
    saveGameGuid: "",
    vehiclesUnlockedData: [],
    vehiclePartsUnlocked: [],
    vehicleLoadouts: [],
    vehicleLastLoadoutIndex: 0,
    challengeData: [],
    sduList: [],
    selectedCustomizations: [],
    equippedEmoteCustomizations: [],
    selectedColorCustomizations: [],
    gbxZoneMapFodSaveGameData: undefined,
    unlockedEchoLogs: [],
    nicknameMappings: [],
    accumulatedLevelPersistenceResetTimerSeconds: 0,
    challengeCategoryCompletionPcts: undefined,
    characterSlotSaveGameData: undefined,
    uiTrackingSaveGameData: undefined,
    preferredCharacterName: "",
    nameCharacterLimit: 0,
    preferredGroupMode: 0,
    timeOfDaySaveGameData: undefined,
    levelPersistenceData: [],
    customFloatCustomizations: [],
    heroPointsSaveData: undefined,
    trackedInteractions: [],
    playerPronounSelection: "",
    playerVoice: undefined,
    lastOverworldTravelStationForPlaythrough: [],
    disableCustomizationSuppression: false,
    customizationLinkData: [],
    profileCloudData: undefined,
    townhubTravelInfo: undefined,
    difficulty: 0,
  };
}

export const Character = {
  encode(
    message: Character,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.saveGameId !== 0) {
      writer.uint32(8).uint32(message.saveGameId);
    }
    if (message.lastSaveTimestamp !== 0) {
      writer.uint32(16).int64(message.lastSaveTimestamp);
    }
    if (message.timePlayedSeconds !== 0) {
      writer.uint32(24).uint32(message.timePlayedSeconds);
    }
    if (message.playerClassData !== undefined) {
      PlayerClassSaveGameData.encode(
        message.playerClassData,
        writer.uint32(34).fork()
      ).ldelim();
    }
    for (const v of message.resourcePools) {
      ResourcePoolSavegameData.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.savedRegions) {
      RegionSaveGameData.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.experiencePoints !== 0) {
      writer.uint32(56).int32(message.experiencePoints);
    }
    for (const v of message.gameStatsData) {
      GameStatSaveGameData.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.inventoryCategoryList) {
      InventoryCategorySaveData.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    for (const v of message.inventoryItems) {
      OakInventoryItemSaveGameData.encode(
        v!,
        writer.uint32(82).fork()
      ).ldelim();
    }
    for (const v of message.equippedInventoryList) {
      EquippedInventorySaveGameData.encode(
        v!,
        writer.uint32(90).fork()
      ).ldelim();
    }
    writer.uint32(98).fork();
    for (const v of message.activeWeaponList) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.abilityData !== undefined) {
      OakPlayerAbilitySaveGameData.encode(
        message.abilityData,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.lastPlayThroughIndex !== 0) {
      writer.uint32(112).int32(message.lastPlayThroughIndex);
    }
    if (message.playthroughsCompleted !== 0) {
      writer.uint32(120).int32(message.playthroughsCompleted);
    }
    if (message.showNewPlaythroughNotification === true) {
      writer.uint32(128).bool(message.showNewPlaythroughNotification);
    }
    for (const v of message.missionPlaythroughsData) {
      MissionPlaythroughSaveGameData.encode(
        v!,
        writer.uint32(138).fork()
      ).ldelim();
    }
    for (const v of message.lastActiveTravelStationForPlaythrough) {
      writer.uint32(146).string(v!);
    }
    for (const v of message.gameStateSaveDataForPlaythrough) {
      GameStateSaveData.encode(v!, writer.uint32(154).fork()).ldelim();
    }
    for (const v of message.registeredDownloadableEntitlements) {
      RegisteredDownloadableEntitlements.encode(
        v!,
        writer.uint32(162).fork()
      ).ldelim();
    }
    for (const v of message.activeTravelStationsForPlaythrough) {
      PlaythroughActiveFastTravelSaveData.encode(
        v!,
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.discoveryData !== undefined) {
      DiscoverySaveData.encode(
        message.discoveryData,
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.saveGameGuid !== "") {
      writer.uint32(186).string(message.saveGameGuid);
    }
    for (const v of message.vehiclesUnlockedData) {
      VehicleUnlockedSaveGameData.encode(
        v!,
        writer.uint32(194).fork()
      ).ldelim();
    }
    for (const v of message.vehiclePartsUnlocked) {
      writer.uint32(202).string(v!);
    }
    for (const v of message.vehicleLoadouts) {
      OakCARMenuVehicleConfigSaveData.encode(
        v!,
        writer.uint32(210).fork()
      ).ldelim();
    }
    if (message.vehicleLastLoadoutIndex !== 0) {
      writer.uint32(216).int32(message.vehicleLastLoadoutIndex);
    }
    for (const v of message.challengeData) {
      ChallengeSaveGameData.encode(v!, writer.uint32(226).fork()).ldelim();
    }
    for (const v of message.sduList) {
      OakSDUSaveGameData.encode(v!, writer.uint32(234).fork()).ldelim();
    }
    for (const v of message.selectedCustomizations) {
      writer.uint32(242).string(v!);
    }
    writer.uint32(250).fork();
    for (const v of message.equippedEmoteCustomizations) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.selectedColorCustomizations) {
      CustomPlayerColorSaveGameData.encode(
        v!,
        writer.uint32(258).fork()
      ).ldelim();
    }
    if (message.gbxZoneMapFodSaveGameData !== undefined) {
      GbxZoneMapFODSaveGameData.encode(
        message.gbxZoneMapFodSaveGameData,
        writer.uint32(266).fork()
      ).ldelim();
    }
    for (const v of message.unlockedEchoLogs) {
      EchoLogSaveGameData.encode(v!, writer.uint32(290).fork()).ldelim();
    }
    for (const v of message.nicknameMappings) {
      Character_NicknameMappingsEntry.encode(
        v!,
        writer.uint32(306).fork()
      ).ldelim();
    }
    if (message.accumulatedLevelPersistenceResetTimerSeconds !== 0) {
      writer
        .uint32(312)
        .uint32(message.accumulatedLevelPersistenceResetTimerSeconds);
    }
    if (message.challengeCategoryCompletionPcts !== undefined) {
      ChallengeCategoryProgressSaveData.encode(
        message.challengeCategoryCompletionPcts,
        writer.uint32(322).fork()
      ).ldelim();
    }
    if (message.characterSlotSaveGameData !== undefined) {
      OakPlayerCharacterSlotSaveGameData.encode(
        message.characterSlotSaveGameData,
        writer.uint32(330).fork()
      ).ldelim();
    }
    if (message.uiTrackingSaveGameData !== undefined) {
      UITrackingSaveGameData.encode(
        message.uiTrackingSaveGameData,
        writer.uint32(338).fork()
      ).ldelim();
    }
    if (message.preferredCharacterName !== "") {
      writer.uint32(346).string(message.preferredCharacterName);
    }
    if (message.nameCharacterLimit !== 0) {
      writer.uint32(352).int32(message.nameCharacterLimit);
    }
    if (message.preferredGroupMode !== 0) {
      writer.uint32(360).uint32(message.preferredGroupMode);
    }
    if (message.timeOfDaySaveGameData !== undefined) {
      TimeOfDaySaveGameData.encode(
        message.timeOfDaySaveGameData,
        writer.uint32(370).fork()
      ).ldelim();
    }
    for (const v of message.levelPersistenceData) {
      LevelPersistenceLevelSaveGameData.encode(
        v!,
        writer.uint32(378).fork()
      ).ldelim();
    }
    for (const v of message.customFloatCustomizations) {
      CustomFloatCustomizationSaveGameData.encode(
        v!,
        writer.uint32(394).fork()
      ).ldelim();
    }
    if (message.heroPointsSaveData !== undefined) {
      HeroPointsSaveData.encode(
        message.heroPointsSaveData,
        writer.uint32(402).fork()
      ).ldelim();
    }
    for (const v of message.trackedInteractions) {
      TrackedInteractionSaveData.encode(v!, writer.uint32(410).fork()).ldelim();
    }
    if (message.playerPronounSelection !== "") {
      writer.uint32(418).string(message.playerPronounSelection);
    }
    if (message.playerVoice !== undefined) {
      PlayerVoiceSaveData.encode(
        message.playerVoice,
        writer.uint32(426).fork()
      ).ldelim();
    }
    for (const v of message.lastOverworldTravelStationForPlaythrough) {
      writer.uint32(434).string(v!);
    }
    if (message.disableCustomizationSuppression === true) {
      writer.uint32(440).bool(message.disableCustomizationSuppression);
    }
    for (const v of message.customizationLinkData) {
      OakProfileCustomizationLinkData.encode(
        v!,
        writer.uint32(450).fork()
      ).ldelim();
    }
    if (message.profileCloudData !== undefined) {
      OakProfileCloudData.encode(
        message.profileCloudData,
        writer.uint32(514).fork()
      ).ldelim();
    }
    if (message.townhubTravelInfo !== undefined) {
      DafTownHubTravelData.encode(
        message.townhubTravelInfo,
        writer.uint32(522).fork()
      ).ldelim();
    }
    if (message.difficulty !== 0) {
      writer.uint32(528).uint32(message.difficulty);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Character {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCharacter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.saveGameId = reader.uint32();
          break;
        case 2:
          message.lastSaveTimestamp = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.timePlayedSeconds = reader.uint32();
          break;
        case 4:
          message.playerClassData = PlayerClassSaveGameData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.resourcePools.push(
            ResourcePoolSavegameData.decode(reader, reader.uint32())
          );
          break;
        case 6:
          message.savedRegions.push(
            RegionSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 7:
          message.experiencePoints = reader.int32();
          break;
        case 8:
          message.gameStatsData.push(
            GameStatSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.inventoryCategoryList.push(
            InventoryCategorySaveData.decode(reader, reader.uint32())
          );
          break;
        case 10:
          message.inventoryItems.push(
            OakInventoryItemSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.equippedInventoryList.push(
            EquippedInventorySaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 12:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.activeWeaponList.push(reader.int32());
            }
          } else {
            message.activeWeaponList.push(reader.int32());
          }
          break;
        case 13:
          message.abilityData = OakPlayerAbilitySaveGameData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.lastPlayThroughIndex = reader.int32();
          break;
        case 15:
          message.playthroughsCompleted = reader.int32();
          break;
        case 16:
          message.showNewPlaythroughNotification = reader.bool();
          break;
        case 17:
          message.missionPlaythroughsData.push(
            MissionPlaythroughSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 18:
          message.lastActiveTravelStationForPlaythrough.push(reader.string());
          break;
        case 19:
          message.gameStateSaveDataForPlaythrough.push(
            GameStateSaveData.decode(reader, reader.uint32())
          );
          break;
        case 20:
          message.registeredDownloadableEntitlements.push(
            RegisteredDownloadableEntitlements.decode(reader, reader.uint32())
          );
          break;
        case 21:
          message.activeTravelStationsForPlaythrough.push(
            PlaythroughActiveFastTravelSaveData.decode(reader, reader.uint32())
          );
          break;
        case 22:
          message.discoveryData = DiscoverySaveData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 23:
          message.saveGameGuid = reader.string();
          break;
        case 24:
          message.vehiclesUnlockedData.push(
            VehicleUnlockedSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 25:
          message.vehiclePartsUnlocked.push(reader.string());
          break;
        case 26:
          message.vehicleLoadouts.push(
            OakCARMenuVehicleConfigSaveData.decode(reader, reader.uint32())
          );
          break;
        case 27:
          message.vehicleLastLoadoutIndex = reader.int32();
          break;
        case 28:
          message.challengeData.push(
            ChallengeSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 29:
          message.sduList.push(
            OakSDUSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 30:
          message.selectedCustomizations.push(reader.string());
          break;
        case 31:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.equippedEmoteCustomizations.push(reader.int32());
            }
          } else {
            message.equippedEmoteCustomizations.push(reader.int32());
          }
          break;
        case 32:
          message.selectedColorCustomizations.push(
            CustomPlayerColorSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 33:
          message.gbxZoneMapFodSaveGameData = GbxZoneMapFODSaveGameData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 36:
          message.unlockedEchoLogs.push(
            EchoLogSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 38:
          message.nicknameMappings.push(
            Character_NicknameMappingsEntry.decode(reader, reader.uint32())
          );
          break;
        case 39:
          message.accumulatedLevelPersistenceResetTimerSeconds =
            reader.uint32();
          break;
        case 40:
          message.challengeCategoryCompletionPcts =
            ChallengeCategoryProgressSaveData.decode(reader, reader.uint32());
          break;
        case 41:
          message.characterSlotSaveGameData =
            OakPlayerCharacterSlotSaveGameData.decode(reader, reader.uint32());
          break;
        case 42:
          message.uiTrackingSaveGameData = UITrackingSaveGameData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 43:
          message.preferredCharacterName = reader.string();
          break;
        case 44:
          message.nameCharacterLimit = reader.int32();
          break;
        case 45:
          message.preferredGroupMode = reader.uint32();
          break;
        case 46:
          message.timeOfDaySaveGameData = TimeOfDaySaveGameData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 47:
          message.levelPersistenceData.push(
            LevelPersistenceLevelSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 49:
          message.customFloatCustomizations.push(
            CustomFloatCustomizationSaveGameData.decode(reader, reader.uint32())
          );
          break;
        case 50:
          message.heroPointsSaveData = HeroPointsSaveData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 51:
          message.trackedInteractions.push(
            TrackedInteractionSaveData.decode(reader, reader.uint32())
          );
          break;
        case 52:
          message.playerPronounSelection = reader.string();
          break;
        case 53:
          message.playerVoice = PlayerVoiceSaveData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 54:
          message.lastOverworldTravelStationForPlaythrough.push(
            reader.string()
          );
          break;
        case 55:
          message.disableCustomizationSuppression = reader.bool();
          break;
        case 56:
          message.customizationLinkData.push(
            OakProfileCustomizationLinkData.decode(reader, reader.uint32())
          );
          break;
        case 64:
          message.profileCloudData = OakProfileCloudData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 65:
          message.townhubTravelInfo = DafTownHubTravelData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 66:
          message.difficulty = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Character {
    return {
      saveGameId: isSet(object.saveGameId) ? Number(object.saveGameId) : 0,
      lastSaveTimestamp: isSet(object.lastSaveTimestamp)
        ? Number(object.lastSaveTimestamp)
        : 0,
      timePlayedSeconds: isSet(object.timePlayedSeconds)
        ? Number(object.timePlayedSeconds)
        : 0,
      playerClassData: isSet(object.playerClassData)
        ? PlayerClassSaveGameData.fromJSON(object.playerClassData)
        : undefined,
      resourcePools: Array.isArray(object?.resourcePools)
        ? object.resourcePools.map((e: any) =>
            ResourcePoolSavegameData.fromJSON(e)
          )
        : [],
      savedRegions: Array.isArray(object?.savedRegions)
        ? object.savedRegions.map((e: any) => RegionSaveGameData.fromJSON(e))
        : [],
      experiencePoints: isSet(object.experiencePoints)
        ? Number(object.experiencePoints)
        : 0,
      gameStatsData: Array.isArray(object?.gameStatsData)
        ? object.gameStatsData.map((e: any) => GameStatSaveGameData.fromJSON(e))
        : [],
      inventoryCategoryList: Array.isArray(object?.inventoryCategoryList)
        ? object.inventoryCategoryList.map((e: any) =>
            InventoryCategorySaveData.fromJSON(e)
          )
        : [],
      inventoryItems: Array.isArray(object?.inventoryItems)
        ? object.inventoryItems.map((e: any) =>
            OakInventoryItemSaveGameData.fromJSON(e)
          )
        : [],
      equippedInventoryList: Array.isArray(object?.equippedInventoryList)
        ? object.equippedInventoryList.map((e: any) =>
            EquippedInventorySaveGameData.fromJSON(e)
          )
        : [],
      activeWeaponList: Array.isArray(object?.activeWeaponList)
        ? object.activeWeaponList.map((e: any) => Number(e))
        : [],
      abilityData: isSet(object.abilityData)
        ? OakPlayerAbilitySaveGameData.fromJSON(object.abilityData)
        : undefined,
      lastPlayThroughIndex: isSet(object.lastPlayThroughIndex)
        ? Number(object.lastPlayThroughIndex)
        : 0,
      playthroughsCompleted: isSet(object.playthroughsCompleted)
        ? Number(object.playthroughsCompleted)
        : 0,
      showNewPlaythroughNotification: isSet(
        object.showNewPlaythroughNotification
      )
        ? Boolean(object.showNewPlaythroughNotification)
        : false,
      missionPlaythroughsData: Array.isArray(object?.missionPlaythroughsData)
        ? object.missionPlaythroughsData.map((e: any) =>
            MissionPlaythroughSaveGameData.fromJSON(e)
          )
        : [],
      lastActiveTravelStationForPlaythrough: Array.isArray(
        object?.lastActiveTravelStationForPlaythrough
      )
        ? object.lastActiveTravelStationForPlaythrough.map((e: any) =>
            String(e)
          )
        : [],
      gameStateSaveDataForPlaythrough: Array.isArray(
        object?.gameStateSaveDataForPlaythrough
      )
        ? object.gameStateSaveDataForPlaythrough.map((e: any) =>
            GameStateSaveData.fromJSON(e)
          )
        : [],
      registeredDownloadableEntitlements: Array.isArray(
        object?.registeredDownloadableEntitlements
      )
        ? object.registeredDownloadableEntitlements.map((e: any) =>
            RegisteredDownloadableEntitlements.fromJSON(e)
          )
        : [],
      activeTravelStationsForPlaythrough: Array.isArray(
        object?.activeTravelStationsForPlaythrough
      )
        ? object.activeTravelStationsForPlaythrough.map((e: any) =>
            PlaythroughActiveFastTravelSaveData.fromJSON(e)
          )
        : [],
      discoveryData: isSet(object.discoveryData)
        ? DiscoverySaveData.fromJSON(object.discoveryData)
        : undefined,
      saveGameGuid: isSet(object.saveGameGuid)
        ? String(object.saveGameGuid)
        : "",
      vehiclesUnlockedData: Array.isArray(object?.vehiclesUnlockedData)
        ? object.vehiclesUnlockedData.map((e: any) =>
            VehicleUnlockedSaveGameData.fromJSON(e)
          )
        : [],
      vehiclePartsUnlocked: Array.isArray(object?.vehiclePartsUnlocked)
        ? object.vehiclePartsUnlocked.map((e: any) => String(e))
        : [],
      vehicleLoadouts: Array.isArray(object?.vehicleLoadouts)
        ? object.vehicleLoadouts.map((e: any) =>
            OakCARMenuVehicleConfigSaveData.fromJSON(e)
          )
        : [],
      vehicleLastLoadoutIndex: isSet(object.vehicleLastLoadoutIndex)
        ? Number(object.vehicleLastLoadoutIndex)
        : 0,
      challengeData: Array.isArray(object?.challengeData)
        ? object.challengeData.map((e: any) =>
            ChallengeSaveGameData.fromJSON(e)
          )
        : [],
      sduList: Array.isArray(object?.sduList)
        ? object.sduList.map((e: any) => OakSDUSaveGameData.fromJSON(e))
        : [],
      selectedCustomizations: Array.isArray(object?.selectedCustomizations)
        ? object.selectedCustomizations.map((e: any) => String(e))
        : [],
      equippedEmoteCustomizations: Array.isArray(
        object?.equippedEmoteCustomizations
      )
        ? object.equippedEmoteCustomizations.map((e: any) => Number(e))
        : [],
      selectedColorCustomizations: Array.isArray(
        object?.selectedColorCustomizations
      )
        ? object.selectedColorCustomizations.map((e: any) =>
            CustomPlayerColorSaveGameData.fromJSON(e)
          )
        : [],
      gbxZoneMapFodSaveGameData: isSet(object.gbxZoneMapFodSaveGameData)
        ? GbxZoneMapFODSaveGameData.fromJSON(object.gbxZoneMapFodSaveGameData)
        : undefined,
      unlockedEchoLogs: Array.isArray(object?.unlockedEchoLogs)
        ? object.unlockedEchoLogs.map((e: any) =>
            EchoLogSaveGameData.fromJSON(e)
          )
        : [],
      nicknameMappings: Array.isArray(object?.nicknameMappings)
        ? object.nicknameMappings.map((e: any) =>
            Character_NicknameMappingsEntry.fromJSON(e)
          )
        : [],
      accumulatedLevelPersistenceResetTimerSeconds: isSet(
        object.accumulatedLevelPersistenceResetTimerSeconds
      )
        ? Number(object.accumulatedLevelPersistenceResetTimerSeconds)
        : 0,
      challengeCategoryCompletionPcts: isSet(
        object.challengeCategoryCompletionPcts
      )
        ? ChallengeCategoryProgressSaveData.fromJSON(
            object.challengeCategoryCompletionPcts
          )
        : undefined,
      characterSlotSaveGameData: isSet(object.characterSlotSaveGameData)
        ? OakPlayerCharacterSlotSaveGameData.fromJSON(
            object.characterSlotSaveGameData
          )
        : undefined,
      uiTrackingSaveGameData: isSet(object.uiTrackingSaveGameData)
        ? UITrackingSaveGameData.fromJSON(object.uiTrackingSaveGameData)
        : undefined,
      preferredCharacterName: isSet(object.preferredCharacterName)
        ? String(object.preferredCharacterName)
        : "",
      nameCharacterLimit: isSet(object.nameCharacterLimit)
        ? Number(object.nameCharacterLimit)
        : 0,
      preferredGroupMode: isSet(object.preferredGroupMode)
        ? Number(object.preferredGroupMode)
        : 0,
      timeOfDaySaveGameData: isSet(object.timeOfDaySaveGameData)
        ? TimeOfDaySaveGameData.fromJSON(object.timeOfDaySaveGameData)
        : undefined,
      levelPersistenceData: Array.isArray(object?.levelPersistenceData)
        ? object.levelPersistenceData.map((e: any) =>
            LevelPersistenceLevelSaveGameData.fromJSON(e)
          )
        : [],
      customFloatCustomizations: Array.isArray(
        object?.customFloatCustomizations
      )
        ? object.customFloatCustomizations.map((e: any) =>
            CustomFloatCustomizationSaveGameData.fromJSON(e)
          )
        : [],
      heroPointsSaveData: isSet(object.heroPointsSaveData)
        ? HeroPointsSaveData.fromJSON(object.heroPointsSaveData)
        : undefined,
      trackedInteractions: Array.isArray(object?.trackedInteractions)
        ? object.trackedInteractions.map((e: any) =>
            TrackedInteractionSaveData.fromJSON(e)
          )
        : [],
      playerPronounSelection: isSet(object.playerPronounSelection)
        ? String(object.playerPronounSelection)
        : "",
      playerVoice: isSet(object.playerVoice)
        ? PlayerVoiceSaveData.fromJSON(object.playerVoice)
        : undefined,
      lastOverworldTravelStationForPlaythrough: Array.isArray(
        object?.lastOverworldTravelStationForPlaythrough
      )
        ? object.lastOverworldTravelStationForPlaythrough.map((e: any) =>
            String(e)
          )
        : [],
      disableCustomizationSuppression: isSet(
        object.disableCustomizationSuppression
      )
        ? Boolean(object.disableCustomizationSuppression)
        : false,
      customizationLinkData: Array.isArray(object?.customizationLinkData)
        ? object.customizationLinkData.map((e: any) =>
            OakProfileCustomizationLinkData.fromJSON(e)
          )
        : [],
      profileCloudData: isSet(object.profileCloudData)
        ? OakProfileCloudData.fromJSON(object.profileCloudData)
        : undefined,
      townhubTravelInfo: isSet(object.townhubTravelInfo)
        ? DafTownHubTravelData.fromJSON(object.townhubTravelInfo)
        : undefined,
      difficulty: isSet(object.difficulty) ? Number(object.difficulty) : 0,
    };
  },

  toJSON(message: Character): unknown {
    const obj: any = {};
    message.saveGameId !== undefined &&
      (obj.saveGameId = Math.round(message.saveGameId));
    message.lastSaveTimestamp !== undefined &&
      (obj.lastSaveTimestamp = Math.round(message.lastSaveTimestamp));
    message.timePlayedSeconds !== undefined &&
      (obj.timePlayedSeconds = Math.round(message.timePlayedSeconds));
    message.playerClassData !== undefined &&
      (obj.playerClassData = message.playerClassData
        ? PlayerClassSaveGameData.toJSON(message.playerClassData)
        : undefined);
    if (message.resourcePools) {
      obj.resourcePools = message.resourcePools.map((e) =>
        e ? ResourcePoolSavegameData.toJSON(e) : undefined
      );
    } else {
      obj.resourcePools = [];
    }
    if (message.savedRegions) {
      obj.savedRegions = message.savedRegions.map((e) =>
        e ? RegionSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.savedRegions = [];
    }
    message.experiencePoints !== undefined &&
      (obj.experiencePoints = Math.round(message.experiencePoints));
    if (message.gameStatsData) {
      obj.gameStatsData = message.gameStatsData.map((e) =>
        e ? GameStatSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.gameStatsData = [];
    }
    if (message.inventoryCategoryList) {
      obj.inventoryCategoryList = message.inventoryCategoryList.map((e) =>
        e ? InventoryCategorySaveData.toJSON(e) : undefined
      );
    } else {
      obj.inventoryCategoryList = [];
    }
    if (message.inventoryItems) {
      obj.inventoryItems = message.inventoryItems.map((e) =>
        e ? OakInventoryItemSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.inventoryItems = [];
    }
    if (message.equippedInventoryList) {
      obj.equippedInventoryList = message.equippedInventoryList.map((e) =>
        e ? EquippedInventorySaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.equippedInventoryList = [];
    }
    if (message.activeWeaponList) {
      obj.activeWeaponList = message.activeWeaponList.map((e) => Math.round(e));
    } else {
      obj.activeWeaponList = [];
    }
    message.abilityData !== undefined &&
      (obj.abilityData = message.abilityData
        ? OakPlayerAbilitySaveGameData.toJSON(message.abilityData)
        : undefined);
    message.lastPlayThroughIndex !== undefined &&
      (obj.lastPlayThroughIndex = Math.round(message.lastPlayThroughIndex));
    message.playthroughsCompleted !== undefined &&
      (obj.playthroughsCompleted = Math.round(message.playthroughsCompleted));
    message.showNewPlaythroughNotification !== undefined &&
      (obj.showNewPlaythroughNotification =
        message.showNewPlaythroughNotification);
    if (message.missionPlaythroughsData) {
      obj.missionPlaythroughsData = message.missionPlaythroughsData.map((e) =>
        e ? MissionPlaythroughSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.missionPlaythroughsData = [];
    }
    if (message.lastActiveTravelStationForPlaythrough) {
      obj.lastActiveTravelStationForPlaythrough =
        message.lastActiveTravelStationForPlaythrough.map((e) => e);
    } else {
      obj.lastActiveTravelStationForPlaythrough = [];
    }
    if (message.gameStateSaveDataForPlaythrough) {
      obj.gameStateSaveDataForPlaythrough =
        message.gameStateSaveDataForPlaythrough.map((e) =>
          e ? GameStateSaveData.toJSON(e) : undefined
        );
    } else {
      obj.gameStateSaveDataForPlaythrough = [];
    }
    if (message.registeredDownloadableEntitlements) {
      obj.registeredDownloadableEntitlements =
        message.registeredDownloadableEntitlements.map((e) =>
          e ? RegisteredDownloadableEntitlements.toJSON(e) : undefined
        );
    } else {
      obj.registeredDownloadableEntitlements = [];
    }
    if (message.activeTravelStationsForPlaythrough) {
      obj.activeTravelStationsForPlaythrough =
        message.activeTravelStationsForPlaythrough.map((e) =>
          e ? PlaythroughActiveFastTravelSaveData.toJSON(e) : undefined
        );
    } else {
      obj.activeTravelStationsForPlaythrough = [];
    }
    message.discoveryData !== undefined &&
      (obj.discoveryData = message.discoveryData
        ? DiscoverySaveData.toJSON(message.discoveryData)
        : undefined);
    message.saveGameGuid !== undefined &&
      (obj.saveGameGuid = message.saveGameGuid);
    if (message.vehiclesUnlockedData) {
      obj.vehiclesUnlockedData = message.vehiclesUnlockedData.map((e) =>
        e ? VehicleUnlockedSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.vehiclesUnlockedData = [];
    }
    if (message.vehiclePartsUnlocked) {
      obj.vehiclePartsUnlocked = message.vehiclePartsUnlocked.map((e) => e);
    } else {
      obj.vehiclePartsUnlocked = [];
    }
    if (message.vehicleLoadouts) {
      obj.vehicleLoadouts = message.vehicleLoadouts.map((e) =>
        e ? OakCARMenuVehicleConfigSaveData.toJSON(e) : undefined
      );
    } else {
      obj.vehicleLoadouts = [];
    }
    message.vehicleLastLoadoutIndex !== undefined &&
      (obj.vehicleLastLoadoutIndex = Math.round(
        message.vehicleLastLoadoutIndex
      ));
    if (message.challengeData) {
      obj.challengeData = message.challengeData.map((e) =>
        e ? ChallengeSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.challengeData = [];
    }
    if (message.sduList) {
      obj.sduList = message.sduList.map((e) =>
        e ? OakSDUSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.sduList = [];
    }
    if (message.selectedCustomizations) {
      obj.selectedCustomizations = message.selectedCustomizations.map((e) => e);
    } else {
      obj.selectedCustomizations = [];
    }
    if (message.equippedEmoteCustomizations) {
      obj.equippedEmoteCustomizations = message.equippedEmoteCustomizations.map(
        (e) => Math.round(e)
      );
    } else {
      obj.equippedEmoteCustomizations = [];
    }
    if (message.selectedColorCustomizations) {
      obj.selectedColorCustomizations = message.selectedColorCustomizations.map(
        (e) => (e ? CustomPlayerColorSaveGameData.toJSON(e) : undefined)
      );
    } else {
      obj.selectedColorCustomizations = [];
    }
    message.gbxZoneMapFodSaveGameData !== undefined &&
      (obj.gbxZoneMapFodSaveGameData = message.gbxZoneMapFodSaveGameData
        ? GbxZoneMapFODSaveGameData.toJSON(message.gbxZoneMapFodSaveGameData)
        : undefined);
    if (message.unlockedEchoLogs) {
      obj.unlockedEchoLogs = message.unlockedEchoLogs.map((e) =>
        e ? EchoLogSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.unlockedEchoLogs = [];
    }
    if (message.nicknameMappings) {
      obj.nicknameMappings = message.nicknameMappings.map((e) =>
        e ? Character_NicknameMappingsEntry.toJSON(e) : undefined
      );
    } else {
      obj.nicknameMappings = [];
    }
    message.accumulatedLevelPersistenceResetTimerSeconds !== undefined &&
      (obj.accumulatedLevelPersistenceResetTimerSeconds = Math.round(
        message.accumulatedLevelPersistenceResetTimerSeconds
      ));
    message.challengeCategoryCompletionPcts !== undefined &&
      (obj.challengeCategoryCompletionPcts =
        message.challengeCategoryCompletionPcts
          ? ChallengeCategoryProgressSaveData.toJSON(
              message.challengeCategoryCompletionPcts
            )
          : undefined);
    message.characterSlotSaveGameData !== undefined &&
      (obj.characterSlotSaveGameData = message.characterSlotSaveGameData
        ? OakPlayerCharacterSlotSaveGameData.toJSON(
            message.characterSlotSaveGameData
          )
        : undefined);
    message.uiTrackingSaveGameData !== undefined &&
      (obj.uiTrackingSaveGameData = message.uiTrackingSaveGameData
        ? UITrackingSaveGameData.toJSON(message.uiTrackingSaveGameData)
        : undefined);
    message.preferredCharacterName !== undefined &&
      (obj.preferredCharacterName = message.preferredCharacterName);
    message.nameCharacterLimit !== undefined &&
      (obj.nameCharacterLimit = Math.round(message.nameCharacterLimit));
    message.preferredGroupMode !== undefined &&
      (obj.preferredGroupMode = Math.round(message.preferredGroupMode));
    message.timeOfDaySaveGameData !== undefined &&
      (obj.timeOfDaySaveGameData = message.timeOfDaySaveGameData
        ? TimeOfDaySaveGameData.toJSON(message.timeOfDaySaveGameData)
        : undefined);
    if (message.levelPersistenceData) {
      obj.levelPersistenceData = message.levelPersistenceData.map((e) =>
        e ? LevelPersistenceLevelSaveGameData.toJSON(e) : undefined
      );
    } else {
      obj.levelPersistenceData = [];
    }
    if (message.customFloatCustomizations) {
      obj.customFloatCustomizations = message.customFloatCustomizations.map(
        (e) => (e ? CustomFloatCustomizationSaveGameData.toJSON(e) : undefined)
      );
    } else {
      obj.customFloatCustomizations = [];
    }
    message.heroPointsSaveData !== undefined &&
      (obj.heroPointsSaveData = message.heroPointsSaveData
        ? HeroPointsSaveData.toJSON(message.heroPointsSaveData)
        : undefined);
    if (message.trackedInteractions) {
      obj.trackedInteractions = message.trackedInteractions.map((e) =>
        e ? TrackedInteractionSaveData.toJSON(e) : undefined
      );
    } else {
      obj.trackedInteractions = [];
    }
    message.playerPronounSelection !== undefined &&
      (obj.playerPronounSelection = message.playerPronounSelection);
    message.playerVoice !== undefined &&
      (obj.playerVoice = message.playerVoice
        ? PlayerVoiceSaveData.toJSON(message.playerVoice)
        : undefined);
    if (message.lastOverworldTravelStationForPlaythrough) {
      obj.lastOverworldTravelStationForPlaythrough =
        message.lastOverworldTravelStationForPlaythrough.map((e) => e);
    } else {
      obj.lastOverworldTravelStationForPlaythrough = [];
    }
    message.disableCustomizationSuppression !== undefined &&
      (obj.disableCustomizationSuppression =
        message.disableCustomizationSuppression);
    if (message.customizationLinkData) {
      obj.customizationLinkData = message.customizationLinkData.map((e) =>
        e ? OakProfileCustomizationLinkData.toJSON(e) : undefined
      );
    } else {
      obj.customizationLinkData = [];
    }
    message.profileCloudData !== undefined &&
      (obj.profileCloudData = message.profileCloudData
        ? OakProfileCloudData.toJSON(message.profileCloudData)
        : undefined);
    message.townhubTravelInfo !== undefined &&
      (obj.townhubTravelInfo = message.townhubTravelInfo
        ? DafTownHubTravelData.toJSON(message.townhubTravelInfo)
        : undefined);
    message.difficulty !== undefined &&
      (obj.difficulty = Math.round(message.difficulty));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Character>, I>>(
    object: I
  ): Character {
    const message = createBaseCharacter();
    message.saveGameId = object.saveGameId ?? 0;
    message.lastSaveTimestamp = object.lastSaveTimestamp ?? 0;
    message.timePlayedSeconds = object.timePlayedSeconds ?? 0;
    message.playerClassData =
      object.playerClassData !== undefined && object.playerClassData !== null
        ? PlayerClassSaveGameData.fromPartial(object.playerClassData)
        : undefined;
    message.resourcePools =
      object.resourcePools?.map((e) =>
        ResourcePoolSavegameData.fromPartial(e)
      ) || [];
    message.savedRegions =
      object.savedRegions?.map((e) => RegionSaveGameData.fromPartial(e)) || [];
    message.experiencePoints = object.experiencePoints ?? 0;
    message.gameStatsData =
      object.gameStatsData?.map((e) => GameStatSaveGameData.fromPartial(e)) ||
      [];
    message.inventoryCategoryList =
      object.inventoryCategoryList?.map((e) =>
        InventoryCategorySaveData.fromPartial(e)
      ) || [];
    message.inventoryItems =
      object.inventoryItems?.map((e) =>
        OakInventoryItemSaveGameData.fromPartial(e)
      ) || [];
    message.equippedInventoryList =
      object.equippedInventoryList?.map((e) =>
        EquippedInventorySaveGameData.fromPartial(e)
      ) || [];
    message.activeWeaponList = object.activeWeaponList?.map((e) => e) || [];
    message.abilityData =
      object.abilityData !== undefined && object.abilityData !== null
        ? OakPlayerAbilitySaveGameData.fromPartial(object.abilityData)
        : undefined;
    message.lastPlayThroughIndex = object.lastPlayThroughIndex ?? 0;
    message.playthroughsCompleted = object.playthroughsCompleted ?? 0;
    message.showNewPlaythroughNotification =
      object.showNewPlaythroughNotification ?? false;
    message.missionPlaythroughsData =
      object.missionPlaythroughsData?.map((e) =>
        MissionPlaythroughSaveGameData.fromPartial(e)
      ) || [];
    message.lastActiveTravelStationForPlaythrough =
      object.lastActiveTravelStationForPlaythrough?.map((e) => e) || [];
    message.gameStateSaveDataForPlaythrough =
      object.gameStateSaveDataForPlaythrough?.map((e) =>
        GameStateSaveData.fromPartial(e)
      ) || [];
    message.registeredDownloadableEntitlements =
      object.registeredDownloadableEntitlements?.map((e) =>
        RegisteredDownloadableEntitlements.fromPartial(e)
      ) || [];
    message.activeTravelStationsForPlaythrough =
      object.activeTravelStationsForPlaythrough?.map((e) =>
        PlaythroughActiveFastTravelSaveData.fromPartial(e)
      ) || [];
    message.discoveryData =
      object.discoveryData !== undefined && object.discoveryData !== null
        ? DiscoverySaveData.fromPartial(object.discoveryData)
        : undefined;
    message.saveGameGuid = object.saveGameGuid ?? "";
    message.vehiclesUnlockedData =
      object.vehiclesUnlockedData?.map((e) =>
        VehicleUnlockedSaveGameData.fromPartial(e)
      ) || [];
    message.vehiclePartsUnlocked =
      object.vehiclePartsUnlocked?.map((e) => e) || [];
    message.vehicleLoadouts =
      object.vehicleLoadouts?.map((e) =>
        OakCARMenuVehicleConfigSaveData.fromPartial(e)
      ) || [];
    message.vehicleLastLoadoutIndex = object.vehicleLastLoadoutIndex ?? 0;
    message.challengeData =
      object.challengeData?.map((e) => ChallengeSaveGameData.fromPartial(e)) ||
      [];
    message.sduList =
      object.sduList?.map((e) => OakSDUSaveGameData.fromPartial(e)) || [];
    message.selectedCustomizations =
      object.selectedCustomizations?.map((e) => e) || [];
    message.equippedEmoteCustomizations =
      object.equippedEmoteCustomizations?.map((e) => e) || [];
    message.selectedColorCustomizations =
      object.selectedColorCustomizations?.map((e) =>
        CustomPlayerColorSaveGameData.fromPartial(e)
      ) || [];
    message.gbxZoneMapFodSaveGameData =
      object.gbxZoneMapFodSaveGameData !== undefined &&
      object.gbxZoneMapFodSaveGameData !== null
        ? GbxZoneMapFODSaveGameData.fromPartial(
            object.gbxZoneMapFodSaveGameData
          )
        : undefined;
    message.unlockedEchoLogs =
      object.unlockedEchoLogs?.map((e) => EchoLogSaveGameData.fromPartial(e)) ||
      [];
    message.nicknameMappings =
      object.nicknameMappings?.map((e) =>
        Character_NicknameMappingsEntry.fromPartial(e)
      ) || [];
    message.accumulatedLevelPersistenceResetTimerSeconds =
      object.accumulatedLevelPersistenceResetTimerSeconds ?? 0;
    message.challengeCategoryCompletionPcts =
      object.challengeCategoryCompletionPcts !== undefined &&
      object.challengeCategoryCompletionPcts !== null
        ? ChallengeCategoryProgressSaveData.fromPartial(
            object.challengeCategoryCompletionPcts
          )
        : undefined;
    message.characterSlotSaveGameData =
      object.characterSlotSaveGameData !== undefined &&
      object.characterSlotSaveGameData !== null
        ? OakPlayerCharacterSlotSaveGameData.fromPartial(
            object.characterSlotSaveGameData
          )
        : undefined;
    message.uiTrackingSaveGameData =
      object.uiTrackingSaveGameData !== undefined &&
      object.uiTrackingSaveGameData !== null
        ? UITrackingSaveGameData.fromPartial(object.uiTrackingSaveGameData)
        : undefined;
    message.preferredCharacterName = object.preferredCharacterName ?? "";
    message.nameCharacterLimit = object.nameCharacterLimit ?? 0;
    message.preferredGroupMode = object.preferredGroupMode ?? 0;
    message.timeOfDaySaveGameData =
      object.timeOfDaySaveGameData !== undefined &&
      object.timeOfDaySaveGameData !== null
        ? TimeOfDaySaveGameData.fromPartial(object.timeOfDaySaveGameData)
        : undefined;
    message.levelPersistenceData =
      object.levelPersistenceData?.map((e) =>
        LevelPersistenceLevelSaveGameData.fromPartial(e)
      ) || [];
    message.customFloatCustomizations =
      object.customFloatCustomizations?.map((e) =>
        CustomFloatCustomizationSaveGameData.fromPartial(e)
      ) || [];
    message.heroPointsSaveData =
      object.heroPointsSaveData !== undefined &&
      object.heroPointsSaveData !== null
        ? HeroPointsSaveData.fromPartial(object.heroPointsSaveData)
        : undefined;
    message.trackedInteractions =
      object.trackedInteractions?.map((e) =>
        TrackedInteractionSaveData.fromPartial(e)
      ) || [];
    message.playerPronounSelection = object.playerPronounSelection ?? "";
    message.playerVoice =
      object.playerVoice !== undefined && object.playerVoice !== null
        ? PlayerVoiceSaveData.fromPartial(object.playerVoice)
        : undefined;
    message.lastOverworldTravelStationForPlaythrough =
      object.lastOverworldTravelStationForPlaythrough?.map((e) => e) || [];
    message.disableCustomizationSuppression =
      object.disableCustomizationSuppression ?? false;
    message.customizationLinkData =
      object.customizationLinkData?.map((e) =>
        OakProfileCustomizationLinkData.fromPartial(e)
      ) || [];
    message.profileCloudData =
      object.profileCloudData !== undefined && object.profileCloudData !== null
        ? OakProfileCloudData.fromPartial(object.profileCloudData)
        : undefined;
    message.townhubTravelInfo =
      object.townhubTravelInfo !== undefined &&
      object.townhubTravelInfo !== null
        ? DafTownHubTravelData.fromPartial(object.townhubTravelInfo)
        : undefined;
    message.difficulty = object.difficulty ?? 0;
    return message;
  },
};

function createBaseCharacter_NicknameMappingsEntry(): Character_NicknameMappingsEntry {
  return { key: "", value: "" };
}

export const Character_NicknameMappingsEntry = {
  encode(
    message: Character_NicknameMappingsEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): Character_NicknameMappingsEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCharacter_NicknameMappingsEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
          break;
        case 2:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Character_NicknameMappingsEntry {
    return {
      key: isSet(object.key) ? String(object.key) : "",
      value: isSet(object.value) ? String(object.value) : "",
    };
  },

  toJSON(message: Character_NicknameMappingsEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Character_NicknameMappingsEntry>, I>>(
    object: I
  ): Character_NicknameMappingsEntry {
    const message = createBaseCharacter_NicknameMappingsEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
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
