<!--
var aVocab = new Array();

var intIncr
var intCat

intCat = 0
intIncr = 0

//The data stored is pretty simple.  It works like this:
//
// The aVocab array has sub arrays that are named lists of data.
//
//aVocab[intCat]= new Array(); - The aVocab Array actually holds other arrays.
//aVocab[intCat][0]="FIRST" - This is the name of the list of data in this sub array.  The name helps the program find the data.
//aVocab[intCat][1] = new Array() - Yep, ANOTHER array - this is the array that holds the actual data.
//aVocab[intCat][1][intIncr++]="First thing <SECOND>" // See that <SECOND> tag?  Anything in brackets references another list.
//aVocab[intCat][1][intIncr++]="First thing <THIRD>"
//
// Unless it's the last entry, don't forget to increment and reset the counters!
//
//intCat++
//intIncr=0


aVocab[intCat] = new Array();
aVocab[intCat][0] = "FIRST"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<options>\n\n<options>\n\n<options>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "options"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<manipoptions>"
aVocab[intCat][1][intIncr++] = "<everythingelse>"
aVocab[intCat][1][intIncr++] = "<everythingelse>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "manipoptions"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "It <do> <manip-power>.<also>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "everythingelse"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "It <do> <imbuable>.<also>"
aVocab[intCat][1][intIncr++] = "It <do> <fix>.<also>"
aVocab[intCat][1][intIncr++] = "<create>"
aVocab[intCat][1][intIncr++] = "<senseoptions>"
aVocab[intCat][1][intIncr++] = "<otheroptions>"
aVocab[intCat][1][intIncr++] = "<attract-and-stuff>"
aVocab[intCat][1][intIncr++] = "<transformation>"
//
aVocab[intCat][1][intIncr++] = "It causes <mental>."
aVocab[intCat][1][intIncr++] = "It <effectmix>."
aVocab[intCat][1][intIncr++] = "It <e-d> <sense-stat>."

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "create"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "It <do> create <creatable>.<also>"
aVocab[intCat][1][intIncr++] = "It <do> <crte> <gnrt>.<also>"
aVocab[intCat][1][intIncr++] = "It gives <all-items> the power to <crte> <gnrt>.<also>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "senseoptions"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "It <do-make> see <seeable>.<also>"
aVocab[intCat][1][intIncr++] = "It <do-make> hear <hearable>.<also>"
aVocab[intCat][1][intIncr++] = "It <do> <snse> <sensable>.<also>"
aVocab[intCat][1][intIncr++] = "It <do> <snse> <all-items>."

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "otheroptions"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "It <do> communicate with <communicatable>.<also>"
aVocab[intCat][1][intIncr++] = "It <do> <ctrl> <controllable>.<also>"
aVocab[intCat][1][intIncr++] = "It <do> summon <summonable>.<also>"
aVocab[intCat][1][intIncr++] = "It <do-go> <strangeplace>.<also>"



intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "also"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = ""
aVocab[intCat][1][intIncr++] = ""
aVocab[intCat][1][intIncr++] = ""
aVocab[intCat][1][intIncr++] = ""
aVocab[intCat][1][intIncr++] = ""
aVocab[intCat][1][intIncr++] = ""
aVocab[intCat][1][intIncr++] = ""
aVocab[intCat][1][intIncr++] = ""
aVocab[intCat][1][intIncr++] = ""
aVocab[intCat][1][intIncr++] = ""
aVocab[intCat][1][intIncr++] = ""
aVocab[intCat][1][intIncr++] = " It also causes <mental>."
aVocab[intCat][1][intIncr++] = " It can also cause <mental>."
//aVocab[intCat][1][intIncr++]=" It also <e-d> <sense-stat>."
//aVocab[intCat][1][intIncr++]=" It can also <effectmix-2>."
//aVocab[intCat][1][intIncr++]=" It also <effectmix>."

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "transformation"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "It <do-transform>.<also>"
aVocab[intCat][1][intIncr++] = "It <do-transform>.<also>"
aVocab[intCat][1][intIncr++] = "It <do-transform>.<also>"
aVocab[intCat][1][intIncr++] = "It <do-make> grow <animalpart>.<also>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "attract-and-stuff"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "It <do> protect against <protectable>.<also>"
aVocab[intCat][1][intIncr++] = "It <do> <protect-or-attract> <spooks>.<also>"
aVocab[intCat][1][intIncr++] = "It <do> <attract-or-repel> <animals>.<also>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "ctrl"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "control"
aVocab[intCat][1][intIncr++] = "manipulate"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "snse"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "sense"
aVocab[intCat][1][intIncr++] = "detect"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "crte"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "create"
aVocab[intCat][1][intIncr++] = "generate"
aVocab[intCat][1][intIncr++] = "store"
aVocab[intCat][1][intIncr++] = "drain"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "protect-or-attract"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "repel"
aVocab[intCat][1][intIncr++] = "protect against"
aVocab[intCat][1][intIncr++] = "attract"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "attract-or-repel"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "attract"
aVocab[intCat][1][intIncr++] = "repel"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "target"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "oneself"
aVocab[intCat][1][intIncr++] = "others"
aVocab[intCat][1][intIncr++] = "oneself and others"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "do"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "can"
aVocab[intCat][1][intIncr++] = "can be used to"
aVocab[intCat][1][intIncr++] = "grants the ability to"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "do-go"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "can send one to"
aVocab[intCat][1][intIncr++] = "can be used to travel to"
aVocab[intCat][1][intIncr++] = "grants the ability to travel to"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "do-transform"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "can transform one into <transformable>"
aVocab[intCat][1][intIncr++] = "can transform one into <transformable>"
aVocab[intCat][1][intIncr++] = "can transform one into <transformable>"
aVocab[intCat][1][intIncr++] = "can transform one into <transformable>"
aVocab[intCat][1][intIncr++] = "grants the ability to transform yourself into <transformable>"
aVocab[intCat][1][intIncr++] = "grants the ability to transform yourself into <transformable>"
aVocab[intCat][1][intIncr++] = "grants the ability to transform yourself into <transformable>"
aVocab[intCat][1][intIncr++] = "grants the ability to transform yourself and others into <transformable-others>"
aVocab[intCat][1][intIncr++] = "grants the ability to transform yourself and others into <transformable-others>"
aVocab[intCat][1][intIncr++] = "grants the ability to transform others into <transformable-others>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "do-make"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "can make one"
aVocab[intCat][1][intIncr++] = "can be used to"
aVocab[intCat][1][intIncr++] = "grants the ability to"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "do-cause"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "can cause"
aVocab[intCat][1][intIncr++] = "can be used to cause"
aVocab[intCat][1][intIncr++] = "grants the ability to cause"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "do-stat"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "can <e-d> one's"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "imbuable"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "imbue <imbuable-item> with <imbue-power>"
aVocab[intCat][1][intIncr++] = "imbue <imbuable-item> with <imbue-power>"
aVocab[intCat][1][intIncr++] = "imbue <dolls> with <doll-effects>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "summonable"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<animals>"
aVocab[intCat][1][intIncr++] = "<aliens>"
aVocab[intCat][1][intIncr++] = "<spooks>"
aVocab[intCat][1][intIncr++] = "<elemental-type> elementals"
aVocab[intCat][1][intIncr++] = "<fantastic-people>"
aVocab[intCat][1][intIncr++] = "a <creaturedesc><creature> with <animalpart>"
aVocab[intCat][1][intIncr++] = "a <creaturedesc><creature> of <elemental-type> with <animalpart>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "controllable"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<elemental-type> elementals"
aVocab[intCat][1][intIncr++] = "<fantastic-people>"
aVocab[intCat][1][intIncr++] = "<nature-element>"
aVocab[intCat][1][intIncr++] = "<nature-element>"
aVocab[intCat][1][intIncr++] = "<nature-element>"
aVocab[intCat][1][intIncr++] = "<nature-element>"
aVocab[intCat][1][intIncr++] = "<animals>"
aVocab[intCat][1][intIncr++] = "<animals>"
aVocab[intCat][1][intIncr++] = "a <creaturedesc><creature> with <animalpart>"
aVocab[intCat][1][intIncr++] = "a <creaturedesc><creature> of <elemental-type> with <animalpart>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "creatable"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<nature-element>"
aVocab[intCat][1][intIncr++] = "<create-critter>"
aVocab[intCat][1][intIncr++] = "<create-power>"
aVocab[intCat][1][intIncr++] = "<create-power>"
aVocab[intCat][1][intIncr++] = "<create-object>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "seeable"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<sensable-power>"
aVocab[intCat][1][intIncr++] = "<strangeplace>"
aVocab[intCat][1][intIncr++] = "<spooks-1>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "hearable"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<spooks-1>"
aVocab[intCat][1][intIncr++] = "<strangeplace>"
aVocab[intCat][1][intIncr++] = "strange noises"
aVocab[intCat][1][intIncr++] = "peoples' thoughts"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "sensable"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<sensable-power>"
aVocab[intCat][1][intIncr++] = "<spooks-1>"
aVocab[intCat][1][intIncr++] = "<mineral>"
aVocab[intCat][1][intIncr++] = "<emotion>"
aVocab[intCat][1][intIncr++] = "<compound>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "sensable-power"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "electromagnetic energies"
aVocab[intCat][1][intIncr++] = "magnetism"
aVocab[intCat][1][intIncr++] = "spiritual energy"
aVocab[intCat][1][intIncr++] = "magical energy"
aVocab[intCat][1][intIncr++] = "infrared light"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "compound"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "poison"
aVocab[intCat][1][intIncr++] = "certain poisons"
aVocab[intCat][1][intIncr++] = "certain chemical compounds"
aVocab[intCat][1][intIncr++] = "certain chemicals"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "emotion"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "feelings"
aVocab[intCat][1][intIncr++] = "emotions"
aVocab[intCat][1][intIncr++] = "others' pain"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "protectable"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<electromag>"
aVocab[intCat][1][intIncr++] = "<spooks>"
aVocab[intCat][1][intIncr++] = "<gnrt>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "gnrt"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "power"
aVocab[intCat][1][intIncr++] = "electricity"
aVocab[intCat][1][intIncr++] = "light"
aVocab[intCat][1][intIncr++] = "magical power"
aVocab[intCat][1][intIncr++] = "spiritual power"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "communicatable"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<spooks-1>"
aVocab[intCat][1][intIncr++] = "<aliens>"
aVocab[intCat][1][intIncr++] = "<animals>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "spooks"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<spooks-1>"
aVocab[intCat][1][intIncr++] = "<spooks-2>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "spooks-1"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "the fae"
aVocab[intCat][1][intIncr++] = "spirits"
aVocab[intCat][1][intIncr++] = "ghosts"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "spooks-2"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "vampires"
aVocab[intCat][1][intIncr++] = "werewolves"
aVocab[intCat][1][intIncr++] = "zombies"
aVocab[intCat][1][intIncr++] = "<elemental-type> elementals"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "strangeplace"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "the past"
aVocab[intCat][1][intIncr++] = "the future"
aVocab[intCat][1][intIncr++] = "other dimensions"
aVocab[intCat][1][intIncr++] = "another dimension"
aVocab[intCat][1][intIncr++] = "other locations"
aVocab[intCat][1][intIncr++] = "other worlds"
aVocab[intCat][1][intIncr++] = "another world"
aVocab[intCat][1][intIncr++] = "another realm"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "transformable"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<substance-2>"
aVocab[intCat][1][intIncr++] = "<doll>"
aVocab[intCat][1][intIncr++] = "<fantastic-person>"
aVocab[intCat][1][intIncr++] = "<fantastic-person>"
aVocab[intCat][1][intIncr++] = "a being of <elemental-type>"
aVocab[intCat][1][intIncr++] = "various <animals-sweeping>"
aVocab[intCat][1][intIncr++] = "<animal>"
aVocab[intCat][1][intIncr++] = "<animal>"
aVocab[intCat][1][intIncr++] = "<a-animal-sweeping>-like <creature>"
aVocab[intCat][1][intIncr++] = "<a-animal-sweeping>-like <creature>"
aVocab[intCat][1][intIncr++] = "<a-animal-sweeping>-like <creature> of <elemental-type>"
aVocab[intCat][1][intIncr++] = "<animal>-like <creature>"
aVocab[intCat][1][intIncr++] = "<animal>-like <creature>"
aVocab[intCat][1][intIncr++] = "<animal>-like <creature> of <elemental-type>"
aVocab[intCat][1][intIncr++] = "<animal>-like <creature> of <elemental-type>"
aVocab[intCat][1][intIncr++] = "a <creaturedesc><creature> with <animalpart>"
aVocab[intCat][1][intIncr++] = "a <creaturedesc><creature> with <animalpart>"
aVocab[intCat][1][intIncr++] = "a <creaturedesc><creature> of <elemental-type> with <animalpart>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "transformable-others"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<substance-2>"
aVocab[intCat][1][intIncr++] = "<dolls>"
aVocab[intCat][1][intIncr++] = "<fantastic-people>"
aVocab[intCat][1][intIncr++] = "<fantastic-people>"
aVocab[intCat][1][intIncr++] = "beings of <elemental-type>"
aVocab[intCat][1][intIncr++] = "various <animals-sweeping>"
aVocab[intCat][1][intIncr++] = "<animals>"
aVocab[intCat][1][intIncr++] = "<animals>"
aVocab[intCat][1][intIncr++] = "<animal-sweeping-no-a>-like <creature>s"
aVocab[intCat][1][intIncr++] = "<animal-sweeping-no-a>-like <creature>s"
aVocab[intCat][1][intIncr++] = "<animal-sweeping-no-a>-like <creature>s of <elemental-type>"
aVocab[intCat][1][intIncr++] = "<animal-no-a>-like <creature>s"
aVocab[intCat][1][intIncr++] = "<animal-no-a>-like <creature>s"
aVocab[intCat][1][intIncr++] = "<animal-no-a>-like <creature>s of <elemental-type>"
aVocab[intCat][1][intIncr++] = "<creaturedesc><creature>s with <animalpart>"
aVocab[intCat][1][intIncr++] = "<creaturedesc><creature>s with <animalpart>"
aVocab[intCat][1][intIncr++] = "<creaturedesc><creature>s of <elemental-type> with <animalpart>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "creature"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "creature"
aVocab[intCat][1][intIncr++] = "beast"
aVocab[intCat][1][intIncr++] = "monster"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "creaturedesc"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "huge "
aVocab[intCat][1][intIncr++] = "gigantic "
aVocab[intCat][1][intIncr++] = "massive "
aVocab[intCat][1][intIncr++] = ""
aVocab[intCat][1][intIncr++] = ""
aVocab[intCat][1][intIncr++] = ""

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "construct-material"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<water>"
aVocab[intCat][1][intIncr++] = "<water>"
aVocab[intCat][1][intIncr++] = "<water>"
aVocab[intCat][1][intIncr++] = "<earth>"
aVocab[intCat][1][intIncr++] = "<earth>"
aVocab[intCat][1][intIncr++] = "<earth>"
aVocab[intCat][1][intIncr++] = "<gel>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "elemental-type"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "air"
aVocab[intCat][1][intIncr++] = "earth"
aVocab[intCat][1][intIncr++] = "fire"
aVocab[intCat][1][intIncr++] = "ice"
aVocab[intCat][1][intIncr++] = "light"
aVocab[intCat][1][intIncr++] = "lightning"
aVocab[intCat][1][intIncr++] = "water"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "nature-element"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<weather>"
aVocab[intCat][1][intIncr++] = "<electromag>"
aVocab[intCat][1][intIncr++] = "<water>"
aVocab[intCat][1][intIncr++] = "<earth>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "weather"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "air"
aVocab[intCat][1][intIncr++] = "the weather"
aVocab[intCat][1][intIncr++] = "storms"
aVocab[intCat][1][intIncr++] = "rain"
aVocab[intCat][1][intIncr++] = "snow"
aVocab[intCat][1][intIncr++] = "tornados"
aVocab[intCat][1][intIncr++] = "hail"
aVocab[intCat][1][intIncr++] = "wind"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "electromag"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "fire"
aVocab[intCat][1][intIncr++] = "electricity"
aVocab[intCat][1][intIncr++] = "light"
aVocab[intCat][1][intIncr++] = "lightning"
aVocab[intCat][1][intIncr++] = "radiation"
aVocab[intCat][1][intIncr++] = "ultraviolet light"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "water"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "frost"
aVocab[intCat][1][intIncr++] = "ice"
aVocab[intCat][1][intIncr++] = "snow"
aVocab[intCat][1][intIncr++] = "water"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "frozen"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "snow"
aVocab[intCat][1][intIncr++] = "ice"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "earth"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "bone"
aVocab[intCat][1][intIncr++] = "clay"
aVocab[intCat][1][intIncr++] = "crystal"
aVocab[intCat][1][intIncr++] = "earth"
aVocab[intCat][1][intIncr++] = "glass"
aVocab[intCat][1][intIncr++] = "gravel"
aVocab[intCat][1][intIncr++] = "metal"
aVocab[intCat][1][intIncr++] = "mud"
aVocab[intCat][1][intIncr++] = "sand"
aVocab[intCat][1][intIncr++] = "stone"
aVocab[intCat][1][intIncr++] = "wood"
aVocab[intCat][1][intIncr++] = "wax"


intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "create-power"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "plasma bolts"
aVocab[intCat][1][intIncr++] = "plasma balls"
aVocab[intCat][1][intIncr++] = "protective shields"
aVocab[intCat][1][intIncr++] = "protective armor"
aVocab[intCat][1][intIncr++] = "fireballs"
aVocab[intCat][1][intIncr++] = "lightning bolts"
aVocab[intCat][1][intIncr++] = "illusiory disguises"
aVocab[intCat][1][intIncr++] = "illusions"
aVocab[intCat][1][intIncr++] = "plague"
aVocab[intCat][1][intIncr++] = "heat"
aVocab[intCat][1][intIncr++] = "<musictype> music"
aVocab[intCat][1][intIncr++] = "<musictype> illusiory effects"
aVocab[intCat][1][intIncr++] = "illusions of fears"
aVocab[intCat][1][intIncr++] = "hallucinations of fears"
aVocab[intCat][1][intIncr++] = "streams of fire"
aVocab[intCat][1][intIncr++] = "plasma bolts"
aVocab[intCat][1][intIncr++] = "maps"
aVocab[intCat][1][intIncr++] = "a shelter"
aVocab[intCat][1][intIncr++] = "<create-object>"
aVocab[intCat][1][intIncr++] = "<electromag>"
aVocab[intCat][1][intIncr++] = "<nature-element>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "create-object"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<substance-1> <substance-2>"
aVocab[intCat][1][intIncr++] = "<vehicle>"
aVocab[intCat][1][intIncr++] = "<all-items>"
aVocab[intCat][1][intIncr++] = "<all-items>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "create-critter"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "constructs of <construct-material> in the form of <animals>"
aVocab[intCat][1][intIncr++] = "constructs of <construct-material> in the form of <dolls>"
aVocab[intCat][1][intIncr++] = "<elemental-type> elementals"
aVocab[intCat][1][intIncr++] = "<animal-sweeping-no-a>-like <creature>s"
aVocab[intCat][1][intIncr++] = "<animal-no-a>-like <creature>s"
aVocab[intCat][1][intIncr++] = "monsters"
aVocab[intCat][1][intIncr++] = "cyborgs"
aVocab[intCat][1][intIncr++] = "robots"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "musictype"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "eerie"
aVocab[intCat][1][intIncr++] = "strange"
aVocab[intCat][1][intIncr++] = "hyponotic"
aVocab[intCat][1][intIncr++] = "ethereal"
aVocab[intCat][1][intIncr++] = "soothing"
aVocab[intCat][1][intIncr++] = "rousing"
aVocab[intCat][1][intIncr++] = "otherworldly"
aVocab[intCat][1][intIncr++] = "wild"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "substance-1"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "antimicrobial"
aVocab[intCat][1][intIncr++] = "healing"
aVocab[intCat][1][intIncr++] = "toxic"
aVocab[intCat][1][intIncr++] = "soothing"
aVocab[intCat][1][intIncr++] = "soporific"
aVocab[intCat][1][intIncr++] = "caustic"
aVocab[intCat][1][intIncr++] = "corrosive"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "substance-2"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "gas"
aVocab[intCat][1][intIncr++] = "goo"
aVocab[intCat][1][intIncr++] = "liquid"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "sizechange"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "larger"
aVocab[intCat][1][intIncr++] = "smaller"
aVocab[intCat][1][intIncr++] = "larger or smaller"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "reality"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "bend"
aVocab[intCat][1][intIncr++] = "warp"
aVocab[intCat][1][intIncr++] = "alter"
aVocab[intCat][1][intIncr++] = "manipulate"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "time"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "slow down"
aVocab[intCat][1][intIncr++] = "accelerate"
aVocab[intCat][1][intIncr++] = "reverse"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "imbue-power"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "the power of <elemental-type>"
aVocab[intCat][1][intIncr++] = "the power of <elemental-type>"
aVocab[intCat][1][intIncr++] = "the power of <elemental-type>"
aVocab[intCat][1][intIncr++] = "the power of <elemental-type>"
aVocab[intCat][1][intIncr++] = "<gnrt>"
aVocab[intCat][1][intIncr++] = "<gnrt>"
aVocab[intCat][1][intIncr++] = "<gnrt>"
aVocab[intCat][1][intIncr++] = "<gnrt>"
aVocab[intCat][1][intIncr++] = "consciousness"
aVocab[intCat][1][intIncr++] = "consciousness and speech"
aVocab[intCat][1][intIncr++] = "speech"
aVocab[intCat][1][intIncr++] = "the power to <manip-power>"
aVocab[intCat][1][intIncr++] = "the power to <manip-power>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "manip-power"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "animate <animatable>"
aVocab[intCat][1][intIncr++] = "become slippery"
aVocab[intCat][1][intIncr++] = "become sticky"
aVocab[intCat][1][intIncr++] = "clean <cleanable-item>"
aVocab[intCat][1][intIncr++] = "cut through things"
aVocab[intCat][1][intIncr++] = "<ctrl> <all-items>"
aVocab[intCat][1][intIncr++] = "<ctrl> <gel>"
aVocab[intCat][1][intIncr++] = "<ctrl> gravity"
aVocab[intCat][1][intIncr++] = "<ctrl> machines"
aVocab[intCat][1][intIncr++] = "<ctrl> plants"
aVocab[intCat][1][intIncr++] = "<ctrl> time"
aVocab[intCat][1][intIncr++] = "<ctrl> sound"
aVocab[intCat][1][intIncr++] = "<ctrl> images"
aVocab[intCat][1][intIncr++] = "<ctrl> probability"
aVocab[intCat][1][intIncr++] = "<ctrl> <objects>"
aVocab[intCat][1][intIncr++] = "<ctrl> <emotion>"
aVocab[intCat][1][intIncr++] = "sense and <ctrl> <emotion>"
aVocab[intCat][1][intIncr++] = "<reality> reality"
aVocab[intCat][1][intIncr++] = "become intangible"
aVocab[intCat][1][intIncr++] = "become invisible"
aVocab[intCat][1][intIncr++] = "change appearance"
aVocab[intCat][1][intIncr++] = "control others' minds"
aVocab[intCat][1][intIncr++] = "duplicate <objects>"
aVocab[intCat][1][intIncr++] = "duplicate <all-items>"
aVocab[intCat][1][intIncr++] = "<e-d-2> attractiveness"
aVocab[intCat][1][intIncr++] = "grant <animals> human-like speech"
aVocab[intCat][1][intIncr++] = "grant <animals> human-like intelligence"
aVocab[intCat][1][intIncr++] = "find north"
aVocab[intCat][1][intIncr++] = "find things"
aVocab[intCat][1][intIncr++] = "find <all-items>"
aVocab[intCat][1][intIncr++] = "fly"
aVocab[intCat][1][intIncr++] = "<imp-ext> <mind-contents>"
aVocab[intCat][1][intIncr++] = "improve the quality of <comestible>"
aVocab[intCat][1][intIncr++] = "improve the quality of <mineral>"
aVocab[intCat][1][intIncr++] = "instantly style hair"
aVocab[intCat][1][intIncr++] = "levitate things"
aVocab[intCat][1][intIncr++] = "lift heavy objects"
aVocab[intCat][1][intIncr++] = "make hair grow rapidly"
aVocab[intCat][1][intIncr++] = "make facial hair grow rapidly"
aVocab[intCat][1][intIncr++] = "make plants grow rapidly"
aVocab[intCat][1][intIncr++] = "make people think they're <transformable-others>"
aVocab[intCat][1][intIncr++] = "make things <sizechange>"
aVocab[intCat][1][intIncr++] = "make things colder"
aVocab[intCat][1][intIncr++] = "make things explode"
aVocab[intCat][1][intIncr++] = "make things float"
aVocab[intCat][1][intIncr++] = "make things hotter"
aVocab[intCat][1][intIncr++] = "make things implode"
aVocab[intCat][1][intIncr++] = "make things invisible"
aVocab[intCat][1][intIncr++] = "manifest <manifest> into reality"
aVocab[intCat][1][intIncr++] = "read others' minds"
aVocab[intCat][1][intIncr++] = "see in the dark"
aVocab[intCat][1][intIncr++] = "see through solid objects"
aVocab[intCat][1][intIncr++] = "<time> time"
aVocab[intCat][1][intIncr++] = "<time> aging"
aVocab[intCat][1][intIncr++] = "<time> decay"
aVocab[intCat][1][intIncr++] = "<time> the decay of <comestible>"
aVocab[intCat][1][intIncr++] = "stop time"
aVocab[intCat][1][intIncr++] = "translate any language"
aVocab[intCat][1][intIncr++] = "understand <animals>"
aVocab[intCat][1][intIncr++] = "unlock things"
aVocab[intCat][1][intIncr++] = "unstick things"
aVocab[intCat][1][intIncr++] = "vaporize things"
aVocab[intCat][1][intIncr++] = "disintegrate things"
aVocab[intCat][1][intIncr++] = "give humans <general-animal> traits"
aVocab[intCat][1][intIncr++] = "give humans <general-animal> features"
aVocab[intCat][1][intIncr++] = "determine one's location"
aVocab[intCat][1][intIncr++] = "locate other people"
aVocab[intCat][1][intIncr++] = "track other people"
aVocab[intCat][1][intIncr++] = "make people hear each other's thoughts"
aVocab[intCat][1][intIncr++] = "wrap things in <wrap-item>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "objects"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "objects"
aVocab[intCat][1][intIncr++] = "small objects"
aVocab[intCat][1][intIncr++] = "organic objects"
aVocab[intCat][1][intIncr++] = "inorganic objects"


intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "imp-ext"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "implant"
aVocab[intCat][1][intIncr++] = "extract"
aVocab[intCat][1][intIncr++] = "absorb"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "doll-effects"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "consciousness"
aVocab[intCat][1][intIncr++] = "speech"
aVocab[intCat][1][intIncr++] = "consciousness and mobility"
aVocab[intCat][1][intIncr++] = "speech and mobility"
aVocab[intCat][1][intIncr++] = "consciousness, speech, and mobility"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "mind-contents"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "thoughts"
aVocab[intCat][1][intIncr++] = "memories"
aVocab[intCat][1][intIncr++] = "knowledge"
aVocab[intCat][1][intIncr++] = "skills"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "manifest"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "fears"
aVocab[intCat][1][intIncr++] = "fictional characters"
aVocab[intCat][1][intIncr++] = "imaginary characters"
aVocab[intCat][1][intIncr++] = "imagined objects"
aVocab[intCat][1][intIncr++] = "fictional objects"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "fix"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "heal illness"
aVocab[intCat][1][intIncr++] = "heal injuries"
aVocab[intCat][1][intIncr++] = "heal infections"
aVocab[intCat][1][intIncr++] = "reanimate the dead"
aVocab[intCat][1][intIncr++] = "ressurect the dead"
aVocab[intCat][1][intIncr++] = "repair broken objects"
aVocab[intCat][1][intIncr++] = "repair broken <metal-item>"
aVocab[intCat][1][intIncr++] = "repair broken <dolls>"
aVocab[intCat][1][intIncr++] = "repair broken machines"
aVocab[intCat][1][intIncr++] = "repair broken electronics"
aVocab[intCat][1][intIncr++] = "make things clean"


intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "aliens"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "aliens"
aVocab[intCat][1][intIncr++] = "aliens"
aVocab[intCat][1][intIncr++] = "aliens"
aVocab[intCat][1][intIncr++] = "beings from other dimensions"
aVocab[intCat][1][intIncr++] = "beings from another dimension"
aVocab[intCat][1][intIncr++] = "beings from another world"
aVocab[intCat][1][intIncr++] = "beings from another plane"
aVocab[intCat][1][intIncr++] = "beings from other planes"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "fantastic-people"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "cyborgs"
aVocab[intCat][1][intIncr++] = "robots"
aVocab[intCat][1][intIncr++] = "centaurs"
aVocab[intCat][1][intIncr++] = "elves"
aVocab[intCat][1][intIncr++] = "fae"
aVocab[intCat][1][intIncr++] = "merpeople"
aVocab[intCat][1][intIncr++] = "pixies"
aVocab[intCat][1][intIncr++] = "vampires"
aVocab[intCat][1][intIncr++] = "werewolves"
aVocab[intCat][1][intIncr++] = "zombies"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "fantastic-person"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "a cyborg"
aVocab[intCat][1][intIncr++] = "a robot"
aVocab[intCat][1][intIncr++] = "an centaur"
aVocab[intCat][1][intIncr++] = "an elf"
aVocab[intCat][1][intIncr++] = "a fae"
aVocab[intCat][1][intIncr++] = "a merperson"
aVocab[intCat][1][intIncr++] = "a pixie"
aVocab[intCat][1][intIncr++] = "a vampire"
aVocab[intCat][1][intIncr++] = "a werewolf"
aVocab[intCat][1][intIncr++] = "a zombie"

// Animals in the Singular

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "animal"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "an albatross"
aVocab[intCat][1][intIncr++] = "an alligator"
aVocab[intCat][1][intIncr++] = "an armadillo"
aVocab[intCat][1][intIncr++] = "an antelope"
aVocab[intCat][1][intIncr++] = "a badger"
aVocab[intCat][1][intIncr++] = "a bat"
aVocab[intCat][1][intIncr++] = "a bear"
aVocab[intCat][1][intIncr++] = "a bee"
aVocab[intCat][1][intIncr++] = "a butterfly"
aVocab[intCat][1][intIncr++] = "a cat"
aVocab[intCat][1][intIncr++] = "a chameleon"
aVocab[intCat][1][intIncr++] = "a cheetah"
aVocab[intCat][1][intIncr++] = "a chicken"
aVocab[intCat][1][intIncr++] = "a chinchilla"
aVocab[intCat][1][intIncr++] = "a chipmunk"
aVocab[intCat][1][intIncr++] = "a cockroach"
aVocab[intCat][1][intIncr++] = "a crocodile"
aVocab[intCat][1][intIncr++] = "a crow"
aVocab[intCat][1][intIncr++] = "a deer"
aVocab[intCat][1][intIncr++] = "a dog"
aVocab[intCat][1][intIncr++] = "a donkey"
aVocab[intCat][1][intIncr++] = "a dove"
aVocab[intCat][1][intIncr++] = "a duck"
aVocab[intCat][1][intIncr++] = "a eagle"
aVocab[intCat][1][intIncr++] = "an echidna"
aVocab[intCat][1][intIncr++] = "an eel"
aVocab[intCat][1][intIncr++] = "a falcon"
aVocab[intCat][1][intIncr++] = "a fish"
aVocab[intCat][1][intIncr++] = "a flea"
aVocab[intCat][1][intIncr++] = "a flying squirrel"
aVocab[intCat][1][intIncr++] = "a fox"
aVocab[intCat][1][intIncr++] = "a frog"
aVocab[intCat][1][intIncr++] = "a goat"
aVocab[intCat][1][intIncr++] = "a gopher"
aVocab[intCat][1][intIncr++] = "a hawk"
aVocab[intCat][1][intIncr++] = "a hedgehog"
aVocab[intCat][1][intIncr++] = "a horse"
aVocab[intCat][1][intIncr++] = "a iguana"
aVocab[intCat][1][intIncr++] = "a jerboa"
aVocab[intCat][1][intIncr++] = "a kangaroo"
aVocab[intCat][1][intIncr++] = "a lemur"
aVocab[intCat][1][intIncr++] = "a lion"
aVocab[intCat][1][intIncr++] = "a lynx"
aVocab[intCat][1][intIncr++] = "a magpie"
aVocab[intCat][1][intIncr++] = "a mouse"
aVocab[intCat][1][intIncr++] = "a mole"
aVocab[intCat][1][intIncr++] = "a monkey"
aVocab[intCat][1][intIncr++] = "a mongoose"
aVocab[intCat][1][intIncr++] = "a moose"
aVocab[intCat][1][intIncr++] = "a moth"
aVocab[intCat][1][intIncr++] = "an octopus"
aVocab[intCat][1][intIncr++] = "an owl"
aVocab[intCat][1][intIncr++] = "a panther"
aVocab[intCat][1][intIncr++] = "a parrot"
aVocab[intCat][1][intIncr++] = "a penguin"
aVocab[intCat][1][intIncr++] = "a pigeon"
aVocab[intCat][1][intIncr++] = "a platypus"
aVocab[intCat][1][intIncr++] = "a rabbit"
aVocab[intCat][1][intIncr++] = "a raccoon"
aVocab[intCat][1][intIncr++] = "a rat"
aVocab[intCat][1][intIncr++] = "a robin"
aVocab[intCat][1][intIncr++] = "a scorpion"
aVocab[intCat][1][intIncr++] = "a shark"
aVocab[intCat][1][intIncr++] = "a seagull"
aVocab[intCat][1][intIncr++] = "a sloth"
aVocab[intCat][1][intIncr++] = "a slug"
aVocab[intCat][1][intIncr++] = "a snake"
aVocab[intCat][1][intIncr++] = "a snail"
aVocab[intCat][1][intIncr++] = "a sparrow"
aVocab[intCat][1][intIncr++] = "a spider"
aVocab[intCat][1][intIncr++] = "a squid"
aVocab[intCat][1][intIncr++] = "a squirrel"
aVocab[intCat][1][intIncr++] = "a swallow"
aVocab[intCat][1][intIncr++] = "a swan"
aVocab[intCat][1][intIncr++] = "a tarantula"
aVocab[intCat][1][intIncr++] = "a tiger"
aVocab[intCat][1][intIncr++] = "a toad"
aVocab[intCat][1][intIncr++] = "a tortoise"
aVocab[intCat][1][intIncr++] = "a turtle"
aVocab[intCat][1][intIncr++] = "a walrus"
aVocab[intCat][1][intIncr++] = "a weasel"
aVocab[intCat][1][intIncr++] = "a wolf"
aVocab[intCat][1][intIncr++] = "a wombat"
// Myth Critters
aVocab[intCat][1][intIncr++] = "a dragon"
aVocab[intCat][1][intIncr++] = "a griffin"
aVocab[intCat][1][intIncr++] = "a unicorn"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "general-animal"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<animal-sweeping-no-a>"
aVocab[intCat][1][intIncr++] = "<animal-no-a>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "animal-no-a"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "albatross"
aVocab[intCat][1][intIncr++] = "alligator"
aVocab[intCat][1][intIncr++] = "armadillo"
aVocab[intCat][1][intIncr++] = "antelope"
aVocab[intCat][1][intIncr++] = "badger"
aVocab[intCat][1][intIncr++] = "bat"
aVocab[intCat][1][intIncr++] = "bear"
aVocab[intCat][1][intIncr++] = "bee"
aVocab[intCat][1][intIncr++] = "butterfly"
aVocab[intCat][1][intIncr++] = "cat"
aVocab[intCat][1][intIncr++] = "chameleon"
aVocab[intCat][1][intIncr++] = "cheetah"
aVocab[intCat][1][intIncr++] = "chicken"
aVocab[intCat][1][intIncr++] = "chinchilla"
aVocab[intCat][1][intIncr++] = "chipmunk"
aVocab[intCat][1][intIncr++] = "cockroach"
aVocab[intCat][1][intIncr++] = "crocodile"
aVocab[intCat][1][intIncr++] = "crow"
aVocab[intCat][1][intIncr++] = "deer"
aVocab[intCat][1][intIncr++] = "dog"
aVocab[intCat][1][intIncr++] = "donkey"
aVocab[intCat][1][intIncr++] = "dove"
aVocab[intCat][1][intIncr++] = "duck"
aVocab[intCat][1][intIncr++] = "eagle"
aVocab[intCat][1][intIncr++] = "echidna"
aVocab[intCat][1][intIncr++] = "eel"
aVocab[intCat][1][intIncr++] = "falcon"
aVocab[intCat][1][intIncr++] = "fish"
aVocab[intCat][1][intIncr++] = "flea"
aVocab[intCat][1][intIncr++] = "flying squirrel"
aVocab[intCat][1][intIncr++] = "fox"
aVocab[intCat][1][intIncr++] = "frog"
aVocab[intCat][1][intIncr++] = "goat"
aVocab[intCat][1][intIncr++] = "gopher"
aVocab[intCat][1][intIncr++] = "hawk"
aVocab[intCat][1][intIncr++] = "hedgehog"
aVocab[intCat][1][intIncr++] = "horse"
aVocab[intCat][1][intIncr++] = "iguana"
aVocab[intCat][1][intIncr++] = "jerboa"
aVocab[intCat][1][intIncr++] = "kangaroo"
aVocab[intCat][1][intIncr++] = "lemur"
aVocab[intCat][1][intIncr++] = "lion"
aVocab[intCat][1][intIncr++] = "lynx"
aVocab[intCat][1][intIncr++] = "magpie"
aVocab[intCat][1][intIncr++] = "mouse"
aVocab[intCat][1][intIncr++] = "mole"
aVocab[intCat][1][intIncr++] = "monkey"
aVocab[intCat][1][intIncr++] = "mongoose"
aVocab[intCat][1][intIncr++] = "moose"
aVocab[intCat][1][intIncr++] = "moth"
aVocab[intCat][1][intIncr++] = "octopus"
aVocab[intCat][1][intIncr++] = "owl"
aVocab[intCat][1][intIncr++] = "panther"
aVocab[intCat][1][intIncr++] = "parrot"
aVocab[intCat][1][intIncr++] = "penguin"
aVocab[intCat][1][intIncr++] = "pigeon"
aVocab[intCat][1][intIncr++] = "platypus"
aVocab[intCat][1][intIncr++] = "rabbit"
aVocab[intCat][1][intIncr++] = "raccoon"
aVocab[intCat][1][intIncr++] = "rat"
aVocab[intCat][1][intIncr++] = "robin"
aVocab[intCat][1][intIncr++] = "scorpion"
aVocab[intCat][1][intIncr++] = "shark"
aVocab[intCat][1][intIncr++] = "seagull"
aVocab[intCat][1][intIncr++] = "sloth"
aVocab[intCat][1][intIncr++] = "slug"
aVocab[intCat][1][intIncr++] = "snake"
aVocab[intCat][1][intIncr++] = "snail"
aVocab[intCat][1][intIncr++] = "sparrow"
aVocab[intCat][1][intIncr++] = "spider"
aVocab[intCat][1][intIncr++] = "squid"
aVocab[intCat][1][intIncr++] = "squirrel"
aVocab[intCat][1][intIncr++] = "swallow"
aVocab[intCat][1][intIncr++] = "swan"
aVocab[intCat][1][intIncr++] = "tarantula"
aVocab[intCat][1][intIncr++] = "tiger"
aVocab[intCat][1][intIncr++] = "toad"
aVocab[intCat][1][intIncr++] = "tortoise"
aVocab[intCat][1][intIncr++] = "turtle"
aVocab[intCat][1][intIncr++] = "walrus"
aVocab[intCat][1][intIncr++] = "weasel"
aVocab[intCat][1][intIncr++] = "wolf"
aVocab[intCat][1][intIncr++] = "wombat"
// Myth Critters
aVocab[intCat][1][intIncr++] = "dragon"
aVocab[intCat][1][intIncr++] = "griffin"
aVocab[intCat][1][intIncr++] = "unicorn"


// Animals in the Plural

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "animals"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<animals-specific>"
aVocab[intCat][1][intIncr++] = "<animals-sweeping>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "animals-specific"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "albatrosses"
aVocab[intCat][1][intIncr++] = "alligators"
aVocab[intCat][1][intIncr++] = "armadillos"
aVocab[intCat][1][intIncr++] = "antelopes"
aVocab[intCat][1][intIncr++] = "badgers"
aVocab[intCat][1][intIncr++] = "bats"
aVocab[intCat][1][intIncr++] = "bears"
aVocab[intCat][1][intIncr++] = "bees"
aVocab[intCat][1][intIncr++] = "butterflies"
aVocab[intCat][1][intIncr++] = "cats"
aVocab[intCat][1][intIncr++] = "chameleons"
aVocab[intCat][1][intIncr++] = "cheetahs"
aVocab[intCat][1][intIncr++] = "chickens"
aVocab[intCat][1][intIncr++] = "chinchillas"
aVocab[intCat][1][intIncr++] = "chipmunks"
aVocab[intCat][1][intIncr++] = "cockroaches"
aVocab[intCat][1][intIncr++] = "crocodiles"
aVocab[intCat][1][intIncr++] = "crows"
aVocab[intCat][1][intIncr++] = "deer"
aVocab[intCat][1][intIncr++] = "dogs"
aVocab[intCat][1][intIncr++] = "donkeys"
aVocab[intCat][1][intIncr++] = "doves"
aVocab[intCat][1][intIncr++] = "ducks"
aVocab[intCat][1][intIncr++] = "eagles"
aVocab[intCat][1][intIncr++] = "echidnas"
aVocab[intCat][1][intIncr++] = "eels"
aVocab[intCat][1][intIncr++] = "falcons"
aVocab[intCat][1][intIncr++] = "fish"
aVocab[intCat][1][intIncr++] = "fleas"
aVocab[intCat][1][intIncr++] = "flying squirrels"
aVocab[intCat][1][intIncr++] = "foxes"
aVocab[intCat][1][intIncr++] = "frogs"
aVocab[intCat][1][intIncr++] = "goats"
aVocab[intCat][1][intIncr++] = "gophers"
aVocab[intCat][1][intIncr++] = "hawks"
aVocab[intCat][1][intIncr++] = "hedgehogs"
aVocab[intCat][1][intIncr++] = "horses"
aVocab[intCat][1][intIncr++] = "iguanas"
aVocab[intCat][1][intIncr++] = "jerboas"
aVocab[intCat][1][intIncr++] = "kangaroos"
aVocab[intCat][1][intIncr++] = "lemurs"
aVocab[intCat][1][intIncr++] = "lions"
aVocab[intCat][1][intIncr++] = "lynxes"
aVocab[intCat][1][intIncr++] = "magpies"
aVocab[intCat][1][intIncr++] = "mice"
aVocab[intCat][1][intIncr++] = "moles"
aVocab[intCat][1][intIncr++] = "monkeys"
aVocab[intCat][1][intIncr++] = "mongooses"
aVocab[intCat][1][intIncr++] = "moose"
aVocab[intCat][1][intIncr++] = "moths"
aVocab[intCat][1][intIncr++] = "octopuses"
aVocab[intCat][1][intIncr++] = "owls"
aVocab[intCat][1][intIncr++] = "panthers"
aVocab[intCat][1][intIncr++] = "parrots"
aVocab[intCat][1][intIncr++] = "penguins"
aVocab[intCat][1][intIncr++] = "pigeons"
aVocab[intCat][1][intIncr++] = "platypuses"
aVocab[intCat][1][intIncr++] = "rabbits"
aVocab[intCat][1][intIncr++] = "raccoons"
aVocab[intCat][1][intIncr++] = "rats"
aVocab[intCat][1][intIncr++] = "robins"
aVocab[intCat][1][intIncr++] = "scorpions"
aVocab[intCat][1][intIncr++] = "sharks"
aVocab[intCat][1][intIncr++] = "seagulls"
aVocab[intCat][1][intIncr++] = "sloths"
aVocab[intCat][1][intIncr++] = "slugs"
aVocab[intCat][1][intIncr++] = "snakes"
aVocab[intCat][1][intIncr++] = "snails"
aVocab[intCat][1][intIncr++] = "sparrows"
aVocab[intCat][1][intIncr++] = "spiders"
aVocab[intCat][1][intIncr++] = "squid"
aVocab[intCat][1][intIncr++] = "squirrels"
aVocab[intCat][1][intIncr++] = "swallows"
aVocab[intCat][1][intIncr++] = "swans"
aVocab[intCat][1][intIncr++] = "tarantulas"
aVocab[intCat][1][intIncr++] = "tigers"
aVocab[intCat][1][intIncr++] = "toads"
aVocab[intCat][1][intIncr++] = "tortoises"
aVocab[intCat][1][intIncr++] = "turtles"
aVocab[intCat][1][intIncr++] = "walruses"
aVocab[intCat][1][intIncr++] = "weasels"
aVocab[intCat][1][intIncr++] = "wolves"
aVocab[intCat][1][intIncr++] = "wombats"
// Myth Critters
aVocab[intCat][1][intIncr++] = "dragons"
aVocab[intCat][1][intIncr++] = "griffins"
aVocab[intCat][1][intIncr++] = "unicorns"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "animals-sweeping"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "animals"
aVocab[intCat][1][intIncr++] = "arachnids"
aVocab[intCat][1][intIncr++] = "beetles"
aVocab[intCat][1][intIncr++] = "birds"
aVocab[intCat][1][intIncr++] = "bovines"
aVocab[intCat][1][intIncr++] = "burrowing animals"
aVocab[intCat][1][intIncr++] = "canines"
aVocab[intCat][1][intIncr++] = "cephalopods"
aVocab[intCat][1][intIncr++] = "cervids"
aVocab[intCat][1][intIncr++] = "corvids"
aVocab[intCat][1][intIncr++] = "crocodilians"
aVocab[intCat][1][intIncr++] = "equines"
aVocab[intCat][1][intIncr++] = "felines"
aVocab[intCat][1][intIncr++] = "fish"
aVocab[intCat][1][intIncr++] = "flying animals"
aVocab[intCat][1][intIncr++] = "ground birds"
aVocab[intCat][1][intIncr++] = "insects"
aVocab[intCat][1][intIncr++] = "lizards"
aVocab[intCat][1][intIncr++] = "reptiles"
aVocab[intCat][1][intIncr++] = "rodents"
aVocab[intCat][1][intIncr++] = "mammals"
aVocab[intCat][1][intIncr++] = "marine animals"
aVocab[intCat][1][intIncr++] = "vermin"
aVocab[intCat][1][intIncr++] = "water birds"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "a-animal-sweeping"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "a beetle"
aVocab[intCat][1][intIncr++] = "a bird"
aVocab[intCat][1][intIncr++] = "a bovine"
aVocab[intCat][1][intIncr++] = "a cervid"
aVocab[intCat][1][intIncr++] = "an equine"
aVocab[intCat][1][intIncr++] = "a fish"
aVocab[intCat][1][intIncr++] = "an insect"
aVocab[intCat][1][intIncr++] = "a reptile"
aVocab[intCat][1][intIncr++] = "a theropod"
aVocab[intCat][1][intIncr++] = "a pterosaur"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "animal-sweeping-no-a"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "beetle"
aVocab[intCat][1][intIncr++] = "bird"
aVocab[intCat][1][intIncr++] = "bovine"
aVocab[intCat][1][intIncr++] = "cervid"
aVocab[intCat][1][intIncr++] = "equine"
aVocab[intCat][1][intIncr++] = "fish"
aVocab[intCat][1][intIncr++] = "insect"
aVocab[intCat][1][intIncr++] = "reptile"
aVocab[intCat][1][intIncr++] = "theropod"
aVocab[intCat][1][intIncr++] = "pterosaur"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "animalpart"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<feet>, <neck>, and <head>"
aVocab[intCat][1][intIncr++] = "<feet>, <neck>, and <back>"
aVocab[intCat][1][intIncr++] = "<feet>, <head>, and <back>"
aVocab[intCat][1][intIncr++] = "<neck>, <head>, and <back>"
aVocab[intCat][1][intIncr++] = "<neck>, <wings>, and <back>"
aVocab[intCat][1][intIncr++] = "<neck>, <wings>, and <head>"
aVocab[intCat][1][intIncr++] = "<feet>, <wings>, and <head>"
aVocab[intCat][1][intIncr++] = "<feet>, <wings>, and <back>"
aVocab[intCat][1][intIncr++] = "<neck> and <head>"
aVocab[intCat][1][intIncr++] = "<neck> and <back>"
aVocab[intCat][1][intIncr++] = "<feet> and <back>"
aVocab[intCat][1][intIncr++] = "<feet> and <neck>"
aVocab[intCat][1][intIncr++] = "<feet> and <head>"
aVocab[intCat][1][intIncr++] = "<feet> and <wings>"
aVocab[intCat][1][intIncr++] = "<head> and <wings>"
aVocab[intCat][1][intIncr++] = "<back> and <wings>"
aVocab[intCat][1][intIncr++] = "<neck> and <wings>"
aVocab[intCat][1][intIncr++] = "<feet>"
aVocab[intCat][1][intIncr++] = "<neck>"
aVocab[intCat][1][intIncr++] = "<head>"
aVocab[intCat][1][intIncr++] = "<back>"
aVocab[intCat][1][intIncr++] = "<wings>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "feet"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "bird-like feet"
aVocab[intCat][1][intIncr++] = "talons"
aVocab[intCat][1][intIncr++] = "webbed feet"
aVocab[intCat][1][intIncr++] = "webbed digits"
aVocab[intCat][1][intIncr++] = "claws"
aVocab[intCat][1][intIncr++] = "cloven hooves"
aVocab[intCat][1][intIncr++] = "horse-like hooves"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "wings"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "feathery wings"
aVocab[intCat][1][intIncr++] = "bat-like wings"
aVocab[intCat][1][intIncr++] = "insect-like wings"
aVocab[intCat][1][intIncr++] = "butterfly-like wings"
aVocab[intCat][1][intIncr++] = "pterosaur-like wings"


intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "head"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "horns"
aVocab[intCat][1][intIncr++] = "<hornsize> horns"
aVocab[intCat][1][intIncr++] = "horns"
aVocab[intCat][1][intIncr++] = "<hornsize> antlers"
aVocab[intCat][1][intIncr++] = "antlers"
aVocab[intCat][1][intIncr++] = "antennae"
aVocab[intCat][1][intIncr++] = "a single horn"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "hornsize"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "small"
aVocab[intCat][1][intIncr++] = "huge"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "back"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "a sail fin"
aVocab[intCat][1][intIncr++] = "a hard shell"
aVocab[intCat][1][intIncr++] = "spines"
aVocab[intCat][1][intIncr++] = "a spiny back ridge"
aVocab[intCat][1][intIncr++] = "a plated back ridge"
aVocab[intCat][1][intIncr++] = "back plates"
aVocab[intCat][1][intIncr++] = "a prehensile tail"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "neck"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "tentacles"
aVocab[intCat][1][intIncr++] = "gills"
aVocab[intCat][1][intIncr++] = "scaly skin"
aVocab[intCat][1][intIncr++] = "leathery skin"
aVocab[intCat][1][intIncr++] = "a beak"

// MENTAL AND PHYSICAL

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "effectmix"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<e-d> <sense> and <e-d> <stat>"
aVocab[intCat][1][intIncr++] = "<e-d> <sense> and causes <mental>"
aVocab[intCat][1][intIncr++] = "<e-d> <stat> and causes <mental>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "effectmix-2"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<e-d-2> <sense> and <e-d> <stat>"
aVocab[intCat][1][intIncr++] = "<e-d-2> <sense> and causes <mental>"
aVocab[intCat][1][intIncr++] = "<e-d-2> <stat> and causes <mental>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "e-d"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "enhances"
aVocab[intCat][1][intIncr++] = "enhances"
aVocab[intCat][1][intIncr++] = "diminishes"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "e-d-2"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "enhance"
aVocab[intCat][1][intIncr++] = "enhance"
aVocab[intCat][1][intIncr++] = "diminish"


intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "i-d"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "increase in"
aVocab[intCat][1][intIncr++] = "reduction in"


intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "mental"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<i-d> anxiety"
aVocab[intCat][1][intIncr++] = "<i-d> disturbing thoughts"
aVocab[intCat][1][intIncr++] = "disturbing thoughts"
aVocab[intCat][1][intIncr++] = "enhancement of one's prominent personality traits"
aVocab[intCat][1][intIncr++] = "euphoria"
aVocab[intCat][1][intIncr++] = "hallucinations"
aVocab[intCat][1][intIncr++] = "<i-d> obsessive urges"
aVocab[intCat][1][intIncr++] = "<i-d> paranoia"
aVocab[intCat][1][intIncr++] = "psychosis"
aVocab[intCat][1][intIncr++] = "relaxation"
aVocab[intCat][1][intIncr++] = "<i-d> violent urges"
aVocab[intCat][1][intIncr++] = "<i-d> violent thoughts"
aVocab[intCat][1][intIncr++] = "<i-d> irritability"
aVocab[intCat][1][intIncr++] = "<i-d> impulsiveness"
aVocab[intCat][1][intIncr++] = "<i-d> fearfulness"
aVocab[intCat][1][intIncr++] = "<i-d> nausea"
aVocab[intCat][1][intIncr++] = "<i-d> headaches"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "sense-stat"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<sense>"
aVocab[intCat][1][intIncr++] = "<stat>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "sense"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "sense of taste"
aVocab[intCat][1][intIncr++] = "sense of touch"
aVocab[intCat][1][intIncr++] = "sense of hearing"
aVocab[intCat][1][intIncr++] = "sense of smell"
aVocab[intCat][1][intIncr++] = "sense of sight"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "stat"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "strength"
aVocab[intCat][1][intIncr++] = "agility"
aVocab[intCat][1][intIncr++] = "endurance"
aVocab[intCat][1][intIncr++] = "problem-solving skills"
aVocab[intCat][1][intIncr++] = "reaction speed"
aVocab[intCat][1][intIncr++] = "physical abilities"
aVocab[intCat][1][intIncr++] = "mental abilities"
aVocab[intCat][1][intIncr++] = "psychic abilities"
aVocab[intCat][1][intIncr++] = "sense of direction"
aVocab[intCat][1][intIncr++] = "sense of aim"
aVocab[intCat][1][intIncr++] = "sense of balance"


// Physical Objects & Goodies

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "all-items"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<comestible>"
aVocab[intCat][1][intIncr++] = "<gel>"
aVocab[intCat][1][intIncr++] = "<mineral>"
aVocab[intCat][1][intIncr++] = "<dolls>"
aVocab[intCat][1][intIncr++] = "<metal-item>"
aVocab[intCat][1][intIncr++] = "<cloth-item>"
aVocab[intCat][1][intIncr++] = "<vehicle-p>"
aVocab[intCat][1][intIncr++] = "<wrap-item>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "vehicle"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "a flying vehicle"
aVocab[intCat][1][intIncr++] = "a spaceship"
aVocab[intCat][1][intIncr++] = "a car"
aVocab[intCat][1][intIncr++] = "a plane"
aVocab[intCat][1][intIncr++] = "a bus"
aVocab[intCat][1][intIncr++] = "a minibus"
aVocab[intCat][1][intIncr++] = "a helicopter"
aVocab[intCat][1][intIncr++] = "a boat"
aVocab[intCat][1][intIncr++] = "a ship"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "vehicle-p"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "flying vehicles"
aVocab[intCat][1][intIncr++] = "vehicles"
aVocab[intCat][1][intIncr++] = "spaceships"
aVocab[intCat][1][intIncr++] = "cars"
aVocab[intCat][1][intIncr++] = "planes"
aVocab[intCat][1][intIncr++] = "buses"
aVocab[intCat][1][intIncr++] = "minibuses"
aVocab[intCat][1][intIncr++] = "helicopters"
aVocab[intCat][1][intIncr++] = "boats"
aVocab[intCat][1][intIncr++] = "ships"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "comestible"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<food>"
aVocab[intCat][1][intIncr++] = "<drink>"
aVocab[intCat][1][intIncr++] = "food"
aVocab[intCat][1][intIncr++] = "drinks"
aVocab[intCat][1][intIncr++] = "food and drinks"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "food"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "bread"
aVocab[intCat][1][intIncr++] = "breakfast foods"
aVocab[intCat][1][intIncr++] = "gelatin"
aVocab[intCat][1][intIncr++] = "sandwiches"
aVocab[intCat][1][intIncr++] = "pizza"
aVocab[intCat][1][intIncr++] = "fruit"
aVocab[intCat][1][intIncr++] = "pie"
aVocab[intCat][1][intIncr++] = "cake"
aVocab[intCat][1][intIncr++] = "candy"
aVocab[intCat][1][intIncr++] = "sausages"
aVocab[intCat][1][intIncr++] = "snack foods"
aVocab[intCat][1][intIncr++] = "steak"
aVocab[intCat][1][intIncr++] = "salad"
aVocab[intCat][1][intIncr++] = "meat"
aVocab[intCat][1][intIncr++] = "vegetables"
aVocab[intCat][1][intIncr++] = "tacos"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "drink"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "coffee"
aVocab[intCat][1][intIncr++] = "tea"
aVocab[intCat][1][intIncr++] = "wine"
aVocab[intCat][1][intIncr++] = "alcohol"
aVocab[intCat][1][intIncr++] = "water"
aVocab[intCat][1][intIncr++] = "lemonade"
aVocab[intCat][1][intIncr++] = "fruit punch"
aVocab[intCat][1][intIncr++] = "carbonated beverages"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "imbuable-item"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<mineral>"
aVocab[intCat][1][intIncr++] = "<mineral>"
aVocab[intCat][1][intIncr++] = "<metal-item>"
aVocab[intCat][1][intIncr++] = "<metal-item>"
aVocab[intCat][1][intIncr++] = "<all-items>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "cleanable-item"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<mineral>"
aVocab[intCat][1][intIncr++] = "<metal-item>"
aVocab[intCat][1][intIncr++] = "<dolls>"
aVocab[intCat][1][intIncr++] = "<cloth-item>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "mineral"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "metal objects"
aVocab[intCat][1][intIncr++] = "metals"
aVocab[intCat][1][intIncr++] = "crystals"
aVocab[intCat][1][intIncr++] = "gems"
aVocab[intCat][1][intIncr++] = "<metal>"
aVocab[intCat][1][intIncr++] = "<crystal>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "metal"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "gold"
aVocab[intCat][1][intIncr++] = "iron"
aVocab[intCat][1][intIncr++] = "silver"
aVocab[intCat][1][intIncr++] = "steel"
aVocab[intCat][1][intIncr++] = "copper"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "crystal"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "diamonds"
aVocab[intCat][1][intIncr++] = "rubies"
aVocab[intCat][1][intIncr++] = "sapphires"
aVocab[intCat][1][intIncr++] = "crystals"
aVocab[intCat][1][intIncr++] = "quartz"
aVocab[intCat][1][intIncr++] = "emeralds"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "metal-item"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "chains"
aVocab[intCat][1][intIncr++] = "weapons"
aVocab[intCat][1][intIncr++] = "weapons and armor"
aVocab[intCat][1][intIncr++] = "tools"
aVocab[intCat][1][intIncr++] = "jewelry"
aVocab[intCat][1][intIncr++] = "dishes"
aVocab[intCat][1][intIncr++] = "vehicles"
aVocab[intCat][1][intIncr++] = "<defense>"
aVocab[intCat][1][intIncr++] = "<weapons>"
aVocab[intCat][1][intIncr++] = "<tools>"
aVocab[intCat][1][intIncr++] = "<jewelry>"
aVocab[intCat][1][intIncr++] = "<vehicle-p>"
aVocab[intCat][1][intIncr++] = "<dishes>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "defense"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "armor"
aVocab[intCat][1][intIncr++] = "shields"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "weapons"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "weapons"
aVocab[intCat][1][intIncr++] = "blades"
aVocab[intCat][1][intIncr++] = "guns"
aVocab[intCat][1][intIncr++] = "<blades>"
aVocab[intCat][1][intIncr++] = "<guns>"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "blades"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "swords"
aVocab[intCat][1][intIncr++] = "knives"
aVocab[intCat][1][intIncr++] = "daggers"
aVocab[intCat][1][intIncr++] = "hunting knives"
aVocab[intCat][1][intIncr++] = "axes"
aVocab[intCat][1][intIncr++] = "spears"
aVocab[intCat][1][intIncr++] = "maces"
aVocab[intCat][1][intIncr++] = "staves"
aVocab[intCat][1][intIncr++] = "brass knuckles"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "guns"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "guns"
aVocab[intCat][1][intIncr++] = "bullets"
aVocab[intCat][1][intIncr++] = "rifles"
aVocab[intCat][1][intIncr++] = "pistols"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "tools"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "tools"
aVocab[intCat][1][intIncr++] = "hammers"
aVocab[intCat][1][intIncr++] = "screwdrivers"
aVocab[intCat][1][intIncr++] = "nails"
aVocab[intCat][1][intIncr++] = "chisels"
aVocab[intCat][1][intIncr++] = "screws"
aVocab[intCat][1][intIncr++] = "drills"
aVocab[intCat][1][intIncr++] = "wrenches"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "jewelry"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "earrings"
aVocab[intCat][1][intIncr++] = "necklaces"
aVocab[intCat][1][intIncr++] = "bracelets"
aVocab[intCat][1][intIncr++] = "rings"
aVocab[intCat][1][intIncr++] = "pendants"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "cloth-item"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "fabric"
aVocab[intCat][1][intIncr++] = "cloth items"
aVocab[intCat][1][intIncr++] = "<fabricdesc> cloth items"
aVocab[intCat][1][intIncr++] = "<fabricdesc> fabrics"
aVocab[intCat][1][intIncr++] = "upholstery"
aVocab[intCat][1][intIncr++] = "clothes"
aVocab[intCat][1][intIncr++] = "curtains"
aVocab[intCat][1][intIncr++] = "bedding"
aVocab[intCat][1][intIncr++] = "towels and washcloths"
aVocab[intCat][1][intIncr++] = "carpets"
aVocab[intCat][1][intIncr++] = "ropes"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "fabricdesc"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "delicate"
aVocab[intCat][1][intIncr++] = "certain"
aVocab[intCat][1][intIncr++] = "certain delicate"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "dolls"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "dolls"
aVocab[intCat][1][intIncr++] = "puppets"
aVocab[intCat][1][intIncr++] = "dummies"
aVocab[intCat][1][intIncr++] = "marionettes"
aVocab[intCat][1][intIncr++] = "action figures"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "doll"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "a doll"
aVocab[intCat][1][intIncr++] = "a puppet"
aVocab[intCat][1][intIncr++] = "a dummy"
aVocab[intCat][1][intIncr++] = "a marionette"
aVocab[intCat][1][intIncr++] = "an action figure"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "dishes"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "dishes"
aVocab[intCat][1][intIncr++] = "plates"
aVocab[intCat][1][intIncr++] = "cups"
aVocab[intCat][1][intIncr++] = "flatware"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "gel"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "gelatin"
aVocab[intCat][1][intIncr++] = "hair gel"
aVocab[intCat][1][intIncr++] = "jelly"
aVocab[intCat][1][intIncr++] = "goo"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "wrap-item"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "duct tape"
aVocab[intCat][1][intIncr++] = "paper"
aVocab[intCat][1][intIncr++] = "chains"
aVocab[intCat][1][intIncr++] = "ropes"
aVocab[intCat][1][intIncr++] = "cords"
aVocab[intCat][1][intIncr++] = "webs"
aVocab[intCat][1][intIncr++] = "netting"

intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "animatable"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = "<dolls>"
aVocab[intCat][1][intIncr++] = "<dolls>"
aVocab[intCat][1][intIncr++] = "<gel>"
aVocab[intCat][1][intIncr++] = "<frozen>"
aVocab[intCat][1][intIncr++] = "skeletons"
aVocab[intCat][1][intIncr++] = "dead bodies"
aVocab[intCat][1][intIncr++] = "dead animals"
aVocab[intCat][1][intIncr++] = "human bodies"

//Leave to Copy!
intCat++
intIncr = 0
aVocab[intCat] = new Array();
aVocab[intCat][0] = "THIRD"
aVocab[intCat][1] = new Array()
aVocab[intCat][1][intIncr++] = ""



function GenNumber(nRange) {
    var iNumGen
    iNumGen = Math.round((Math.random() * nRange));

    return iNumGen;
}

function GetFrom(aArray) {
    var undefined
    var sReturn
    sReturn = aArray[GenNumber(aArray.length)];
    if (sReturn == undefined) {
        sReturn = GetFrom(aArray)
    }
    return sReturn
}


function GetArray(sArrayName) {
    for (var intLooper = 0; intLooper < aVocab.length; intLooper++) {
        if (aVocab[intLooper][0] == sArrayName) {
            return aVocab[intLooper][1];
            break;
        }
    }
}

function ScanLine(sLine) {
    var iTagStart, iTagEnd
    var sKey

    if (sLine.indexOf("<") > -1) {
        iTagStart = sLine.indexOf("<");
        iTagEnd = sLine.indexOf(">");

        sKey = sLine.substr(iTagStart + 1, iTagEnd - (iTagStart + 1));

        sKey = GetFrom(GetArray(sKey))
        sLine = sLine.substr(0, iTagStart) + sKey + sLine.substr(iTagEnd + 1, (sLine.length - iTagEnd))

    }


    if (sLine.indexOf("<") > -1) {
        sLine = ScanLine(sLine)
    }

    return sLine;
}


function GenPlot() {
    sLine = GetFrom(GetArray("FIRST"));

    sLine = ScanLine(sLine)

    document.GENFORM.STORY.value = sLine;
}