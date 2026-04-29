interface statAddons {"statName":string, "statDescription":string}

export const WEAPON_STAT_ORDER:string[] = ["Swing Speed", "Charge Rate", "RPM", "Impact", "Blast Radius", "Range", "Velocity", "Efficiency", "Stability", "Guard Defense", "Reload Speed", "Aim Assistance", "Optical Zoom", "Equip Speed", "Move Speed", "ADS Speed", "Energy", "Magazine", "Inventory", "Recoil Direction", "Precision Damage"]

export const WEAPON_STAT_TEXTADDONS:{[key:string]:statAddons} = {
    "2837207746": {
        "statName": "Swing Speed",
        "statDescription": "The speed at which you can launch attacks.",
    },
    "2961396640": {
        "statName": "Charge Rate",
        "statDescription": "Rate at which the weapon charges.",
    },
    "4284893193": {
        "statName": "RPM",
        "statDescription": "The number of shots per minute this weapon can fire.",
    },
    "4043523819": {
        "statName": "Impact",
        "statDescription": "Increases the damage inflicted by each round.",
    },
    "3614673599": {
        "statName": "Blast Radius",
		"statDescription": "Increases the explosion radius of this weapon.",
    },
    "1240592695": {
        "statName": "Range",
        "statDescription": "Increases the effective range of this weapon.",
    },
    "2523465841": {
        "statName": "Velocity",
		"statDescription": "Increases the speed of projectiles fired by this weapon.",
    },
    "2762071195": {
        "statName": "Efficiency",
        "statDescription": "Energy lost when landing attacks with this weapon.",
    },
    "155624089": {
        "statName": "Stability",
        "statDescription": "Decreases weapon recoil when fired continuously.",
    },
    "209426660": {
        "statName": "Guard Defense",
        "statDescription": "Damage reduction while using this weapon.",
    },
    "4188031367": {
        "statName": "Reload Speed",
        "statDescription": "Decreases the time it takes to reload this weapon.",
    },
    "1345609583": {
        "statName": "Aim Assistance",
        "statDescription": "The weapon's ability to augment your aim.",
    },
    "3555269338": {
        "statName": "Optical Zoom",
        "statDescription": "Optical Zoom multiplier.",
    },
    "943549884": {
        "statName": "Equip Speed",
        "statDescription": "The speed with which the weapon can be readied and aimed.",
    },
    "3907551967": {
        "statName": "Move Speed",
        "statDescription": "Speed while carrying the weapon.",
    },
    "3988418950": {
        "statName": "ADS Speed",
        "statDescription": "Speed while aiming down the sights.",
    },
    "925767036": {
        "statName": "Energy",
        "statDescription": "How many attacks can be launched before energy is depleted.",
    },
    "3871231066": {
        "statName": "Magazine",
        "statDescription": "The number of shots which can be fired before reloading.",
    },
    "1931675084": {
        "statName": "Inventory",
        "statDescription": "How much space the weapon occupies in the inventory.",
    },
    "2715839340": {
        "statName": "Recoil Direction",
        "statDescription": "The weapon's tendency to move while firing.",
    },
    "3597844532": {
        "statName": "Precision Damage",
		"statDescription": "Damage when striking a target's weak points.",
    },
}
export const ARMOR_STAT_ORDER:string[] = ["Intellect", "Discipline", "Strength"]

export const ARMOR_STAT_TEXTADDONS:{[key:string]:statAddons} = {
    "144602215": {
        "statName": "Intellect",
		"statDescription": "",
    },
    "1735777505": {
        "statName": "Discipline",
		"statDescription": "",
    },
    "4244567218": {
        "statName": "Strength",
		"statDescription": "",
    }
}
export const SPARROW_STAT_TEXTADDONS:{[key:string]:statAddons} = {
    // "1501155019": "Speed",
    "3017642079": {
        "statName": "Boost",
		"statDescription": "",
    },
    "360359141": {
        "statName": "Durability",
		"statDescription": "",
    }
}