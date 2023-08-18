import UserModel from "../Usermodel/User.model.js";

export async function register(req, res) {
  try {
    const { name, email, department, subject } = req.body;
    console.log(req.body);

    const existingEmail = await UserModel.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const user = new UserModel({
      name,
      email,
      department,
      subject,
    });

    console.log(user);

    await user.save();
    return res.status(200).json({ msg: "Registered successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
