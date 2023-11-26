import { SkillTypes } from "@/enums/skillTypes";
import { Skills } from "@/enums/skills";
import { Prisma } from "@prisma/client";

export const skillTypes: Array<Prisma.SkillTypeCreateInput> = [
  { id: SkillTypes.Agility },
  { id: SkillTypes.Combat },
  { id: SkillTypes.Ferocity },
  { id: SkillTypes.Muscle },
  { id: SkillTypes.Shooting },
  { id: SkillTypes.Stealth },
  { id: SkillTypes.Techno },
];
export const skills: Array<Prisma.SkillCreateManyInput> = [
  {
    name: Skills.Catfall,
    roll: 1,
    skillTypeId: SkillTypes.Agility,
  },
  {
    name: Skills.Dodge,
    roll: 2,
    skillTypeId: SkillTypes.Agility,
  },
  {
    name: Skills.JumpBack,
    roll: 3,
    skillTypeId: SkillTypes.Agility,
  },
  {
    name: Skills.Leap,
    roll: 4,
    skillTypeId: SkillTypes.Agility,
  },
  {
    name: Skills.QuickWitted,
    roll: 5,
    skillTypeId: SkillTypes.Agility,
  },
  {
    name: Skills.Sprint,
    roll: 6,
    skillTypeId: SkillTypes.Agility,
  },
  {
    name: Skills.CombatMaster,
    roll: 1,
    skillTypeId: SkillTypes.Combat,
  },
  {
    name: Skills.Disarm,
    roll: 2,
    skillTypeId: SkillTypes.Combat,
  },
  {
    name: Skills.Feint,
    roll: 3,
    skillTypeId: SkillTypes.Combat,
  },
  {
    name: Skills.Deflect,
    roll: 4,
    skillTypeId: SkillTypes.Combat,
  },
  {
    name: Skills.CounterAttack,
    roll: 5,
    skillTypeId: SkillTypes.Combat,
  },
  {
    name: Skills.StepAside,
    roll: 6,
    skillTypeId: SkillTypes.Combat,
  },
  {
    name: Skills.Ambush,
    roll: 1,
    skillTypeId: SkillTypes.Stealth,
  },
  {
    name: Skills.Dive,
    roll: 2,
    skillTypeId: SkillTypes.Stealth,
  },
  {
    name: Skills.EscapeArtist,
    roll: 3,
    skillTypeId: SkillTypes.Stealth,
  },
  {
    name: Skills.Evade,
    roll: 4,
    skillTypeId: SkillTypes.Stealth,
  },
  {
    name: Skills.Infiltration,
    roll: 5,
    skillTypeId: SkillTypes.Stealth,
  },
  {
    name: Skills.SneakUp,
    roll: 6,
    skillTypeId: SkillTypes.Stealth,
  },
  {
    name: Skills.BodySlam,
    roll: 1,
    skillTypeId: SkillTypes.Muscle,
  },
  {
    name: Skills.BulgingBiceps,
    roll: 2,
    skillTypeId: SkillTypes.Muscle,
  },
  {
    name: Skills.HardAsNails,
    roll: 3,
    skillTypeId: SkillTypes.Muscle,
  },
  {
    name: Skills.Juggernaut,
    roll: 4,
    skillTypeId: SkillTypes.Muscle,
  },
  {
    name: Skills.HurlOpponent,
    roll: 5,
    skillTypeId: SkillTypes.Muscle,
  },
  {
    name: Skills.IronJaw,
    roll: 6,
    skillTypeId: SkillTypes.Muscle,
  },
  {
    name: Skills.BerserkCharge,
    roll: 1,
    skillTypeId: SkillTypes.Ferocity,
  },
  {
    name: Skills.Impetuous,
    roll: 2,
    skillTypeId: SkillTypes.Ferocity,
  },
  {
    name: Skills.IronWill,
    roll: 3,
    skillTypeId: SkillTypes.Ferocity,
  },
  {
    name: Skills.KillerReputation,
    roll: 4,
    skillTypeId: SkillTypes.Ferocity,
  },
  {
    name: Skills.NervesOfSteel,
    roll: 5,
    skillTypeId: SkillTypes.Ferocity,
  },
  {
    name: Skills.TrueGrit,
    roll: 6,
    skillTypeId: SkillTypes.Ferocity,
  },
  {
    name: Skills.CrackShot,
    roll: 1,
    skillTypeId: SkillTypes.Shooting,
  },
  {
    name: Skills.FastShot,
    roll: 2,
    skillTypeId: SkillTypes.Shooting,
  },
  {
    name: Skills.Gunfighter,
    roll: 3,
    skillTypeId: SkillTypes.Shooting,
  },
  {
    name: Skills.HipShooting,
    roll: 4,
    skillTypeId: SkillTypes.Shooting,
  },
  {
    name: Skills.Marksman,
    roll: 5,
    skillTypeId: SkillTypes.Shooting,
  },
  {
    name: Skills.RapidFire,
    roll: 6,
    skillTypeId: SkillTypes.Shooting,
  },
  {
    name: Skills.Armourer,
    roll: 1,
    skillTypeId: SkillTypes.Techno,
  },
  {
    name: Skills.Fixer,
    roll: 2,
    skillTypeId: SkillTypes.Techno,
  },
  {
    name: Skills.Inventor,
    roll: 3,
    skillTypeId: SkillTypes.Techno,
  },
  {
    name: Skills.Medic,
    roll: 4,
    skillTypeId: SkillTypes.Techno,
  },
  {
    name: Skills.Specialist,
    roll: 5,
    skillTypeId: SkillTypes.Techno,
  },
  {
    name: Skills.Weaponsmith,
    roll: 6,
    skillTypeId: SkillTypes.Techno,
  },
];
