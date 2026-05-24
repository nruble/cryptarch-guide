interface FilterOption {
    label: string,
    value: string
}

export const WEAPON_CLASS_OPTIONS: FilterOption[] = [
  { value: '2', label: 'Primary' },
  { value: '3', label: 'Special' },
  { value: '4', label: 'Heavy' },
]

export const WEAPON_TYPE_OPTIONS: FilterOption[] = [
  { value: '5', label: 'Auto Rifle' },
  { value: '6', label: 'Hand Cannon' },
  { value: '7', label: 'Pulse Rifle' },
  { value: '8', label: 'Scout Rifle' },
  { value: '9', label: 'Fusion Rifle' },
  { value: '11', label: 'Shotgun' },
  { value: '14', label: 'Sidearm' },
  { value: '10', label: 'Sniper Rifle' },
  { value: '12', label: 'Machine Gun' },
  { value: '13', label: 'Rocket Launcher' },
  { value: '54', label: 'Sword' },
]

export const ARMOR_CLASS_OPTIONS: FilterOption[] = [
  { value: '23', label: 'Hunter' },
  { value: '22', label: 'Titan' },
  { value: '21', label: 'Warlock' },
]

export const ARMOR_TYPE_OPTIONS: FilterOption[] = [
  { value: '45', label: 'Helmets' },
  { value: '46', label: 'Gauntlets' },
  { value: '47', label: 'Chest' },
  { value: '48', label: 'Legs' },
  { value: '49', label: 'Class Items' },
  { value: '38', label: 'Artifact' },
  { value: '39', label: 'Ghost Shell' },
]

export const INVENTORY_TYPE_OPTIONS: FilterOption[] = [
  { value: '18', label: 'Currency' },
  { value: '19', label: 'Emblems' },
  //{ value: '34', label: 'Engrams' }, // engrams apparently aren't under Inventory super category, so as currently built this displays nothing. If desired, refactor Inventory section
  { value: '35', label: 'Consumables' },
  { value: '40', label: 'Materials' },
  { value: '41', label: 'Shaders' },
  { value: '42', label: 'Ships' },
  { value: '43', label: 'Sparrows' },
  { value: '51', label: 'Ship Blueprints' },
  { value: '56', label: 'Ornaments' },
]

export const ITEM_RARITY_OPTIONS: FilterOption[] = [
  { value: '6', label: 'Exotic' },
  { value: '5', label: 'Legendary' },
  { value: '4', label: 'Rare' },
  { value: '3', label: 'Uncommon' },
  { value: '2', label: 'Common' },
]

export const ACTIVITY_SOURCE_OPTIONS: FilterOption[] = [
    { value: "2765678689", label: "Destination: Old Russia" },
    { value: "866590753", label: "Destination: Ocean of Storms" },
    { value: "3080570839", label: "Destination: Ishtar Sink" },
    { value: "644349516", label: "Destination: Meridian Bay" },
    { value: "1488238664", label: "Destination: Oryx's Dreadnaught" },
    { value: "440710167", label: "Raid: Vault of Glass" },
    { value: "2585003248", label: "Raid: Crota's End" },
    { value: "1662673928", label: "Raid: King's Fall" },
    { value: "4160622434", label: "Raid: Wrath of the Machine" },
    { value: "4161861381", label: "Raid: Reprised Versions" },
    { value: "3602080346", label: "Reward: Strike" },
    { value: "1805138012", label: "Reward: Weekly Heroic Strike" },
    { value: "2312726869", label: "Reward: Nightfall" },
    { value: "1111209135", label: "Reward: Crucible Match" },
    { value: "1322283879", label: "Reward: Iron Banner" },
    { value: "2650556703", label: "Reward: Trials of Osiris" },
    { value: "2682516238", label: "Reward: Patrol Activity" },
    { value: "2784812137", label: "Reward: Prison of Elders" },
    { value: "3667653533", label: "Reward: Archon's Forge" },
    { value: "3341981194", label: "Reward: Quest" },
    { value: "1983234046", label: "Queen's Wrath Quests" },
    { value: "1412538411", label: "Exotic Weapon Bounty" },
    { value: "2659839637", label: "Update: The Taken King" },
    { value: "1537575125", label: "Update: Challenge of the Elders" },
    { value: "2964550958", label: "Update: Rise of Iron" },
    { value: "3068521220", label: "Update: Age of Triumph" },
    { value: "2977848024", label: "Record: Moments of Triumph, Year 2" },
    { value: "3727034986", label: "Record: Rise of Iron Book" },
    { value: "2775576620", label: "Event: Crimson Doubles" },
    { value: "1234918199", label: "Event: Sparrow Racing League" },
    { value: "3131490494", label: "Event: The Dawning" },
    { value: "3475869915", label: "Event: Festival of the Lost" },
    { value: "2900459251", label: "Refer-a-Friend" },
    { value: "4233534433", label: "Character Creation" },
    { value: "4260990541", label: "Evolved from another Item" },
    { value: "560942287", label: "Unknown" },
]

export const VENDOR_SOURCE_OPTIONS: FilterOption[] = [
    // { value: "39778960", label: "Bounty Tracker" },
    { value: "615633921", label: "Cryptarch Rep" },
    { value: "1374970038", label: "Crota's Bane" },
    { value: "4134961255", label: "Crucible Handler" },
    { value: "1362425043", label: "Crucible Quartermaster" },
    { value: "103311758", label: "Dead Orbit" },
    { value: "995344558", label: "Future War Cult" },
    { value: "3072854931", label: "New Monarchy" },
    { value: "1564673835", label: "Guardian Outfitter" },
    { value: "353834582", label: "Gunsmith" },
    { value: "3721473564", label: "Shipwright" },
    { value: "4241664776", label: "The Speaker" },
    { value: "2480320429", label: "Vanguard Hunter Mentor" },
    { value: "1720938419", label: "Vanguard Titan Mentor" },
    { value: "321228980", label: "Vanguard Warlock Mentor" },
    { value: "1482793537", label: "Vanguard Quartermaster" },
    { value: "1682133942", label: "Queen's Wrath" },
    { value: "3378481830", label: "Disciple of Osiris" },
    { value: "512830513", label: "Variks" },
    { value: "469744126", label: "Tyra Karn" },
    { value: "4061111816", label: "Iron Banner Rep" },
    { value: "164690604", label: "Lady Efrideet" },
    { value: "3846902203", label: "Lord Saladin" },
    { value: "3102749437", label: "Shiro-4" },
    { value: "2179714245", label: "Xûr, Agent of the Nine" },
  { value: "3559790162", label: "Eververse" },
  { value: "3498458434", label: "Silver Dust Kiosk" },
  { value: "0", label: "No API Source" },
]