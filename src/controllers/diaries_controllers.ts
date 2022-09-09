import diaryData from '../../diaries.json'
import { NonSensitiveInfoDiaryEntry, DiaryEntry } from '../types'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getDiaries = (_req: any, res: any): string => res.status(200).json(diaries)

export const getNonSensitiveEntries = (): NonSensitiveInfoDiaryEntry [] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility
  }))
}

export const addDiary = (): unknown => {
  return []
}
// export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
//   const entry = diaries.find(d => d.id === id)
//   if (entry !== null) {
//     const { comment, ...restOfDiary } = entry
//     return restOfDiary
//   }
//   return undefined
// }

// export const getUser = async (req = request, res = response) => {
//   const { id } = req.params;

//   try {
//     const user = await User.findById(id);
//     if (user) {
//       res.json({ user });
//     } else {
//       res.json(`the user with the ${id} doenst exits`);
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "something go wrong" });
//   }
// };

// export const createUser = async (req = request, res = response) => {
//   const { name, password, email, rol } = req.body;

//   try {
//     const newUser = await User.create({ name, password, email, rol });

//     //encrrypt password
//     const salt = bcrypt.genSaltSync(10);
//     newUser.password = bcrypt.hashSync(password, salt);

//     await newUser.save();
//     res.json({ newUser });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "the user controller fail" });
//   }
// };

// export const updateUser = async (req = request, res = response) => {
//   const { id } = req.params;
//   const { _id, password, google, state, ...rest } = req.body;
//   console.log("antes pass");
//   if (password) {
//     const salt = bcrypt.genSaltSync();
//     rest.password = bcrypt.hashSync(password, salt);
//   }

//   console.log("despues pass");
//   try {
//     console.log("try");
//     const user = await User.findByIdAndUpdate(id, rest);

//     res.json({
//       msg: "put Api",
//       user,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "the user does not update" });
//   }
// };

// export const deleteUser = async (req = request, res = response) => {
//   const { id } = req.params;

//   try {
//     const user = await User.findByIdAndUpdate(id, { state: false });
//     res.json({
//       msg: `delete users ${id}`,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "the user does not delete" });
//   }
// };
