## Alchmists toolkit
A potion generation mechanic for TTRPGs (WFRP 4E specifically).
go to https://claydegruchy.github.io/alchemists-toolkit/ for live demo

## Usage
This tool is intended for use by GMs only (for now, see todo). The system is ulimtately similar to the TES alchemy system, with "like helping like". To make potions, simple combine ingredients that have the same effect and keep within the production requirements. Each effect needs at least two ingredients that contain it to be added for the potion to take on the effect.
- On behalf of the player, add ingredients to the potion mix
- Each ingredient has a number of effects, with powerful effects requiring special production requirements that are selected below the ingredients. ingredient Production
	- Production steps apply to all ingredients
- The more powerful effects cannot be brewed directly, and must use `alchemical precursors` and passive effects.
	- When a potion is being brewed with powerful effects in its ingredient, those effects will not be active in the resulting potion but will be passive. A potion can have a mix of active and passive effects and a potion with only passive effects is a `precursor` potion.
	- Passive effects in potions cannot be used directly by the players and require additional steps before they can be put to use.
	- A passive effect can be activated like any other effect, by adding another of the same effect to the potion (and making sure any production steps are met).
- Once a potion is brewed, it gets added to the list of ingredients and can be added to other potions or have additional ingredients added to it to form new potions.



## Options
While serious options like potion ingredents need a fork, there are minor options intended to allow the GM to partially obfuscate the usage of the system even if a player finds it. by passing the `?seed=somenumber` param, the GM can set the seed for the potion-gen module, thereby making potion production requirements unique. This has a breaking effect on potions, mind. 

Potions can be loaded and saved as a base64 string to allow progress to be saved. If you use this feature with the seed, *be sure to use the same seed* or your potions wont work when you load.

The `Philosophers stone` is the most powerful production step that can be taken and always unlocks all effects. If you decide to give one to a player, beware that it may make things pretty imbalanced.


## Todo
- add extra components
	- warpstone
	- starstone
- add a player facing version with hidden properties or gm configurable avalible ingredients/limited mixes