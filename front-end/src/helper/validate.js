import { toast } from "react-hot-toast";

export async function formvalidate(values) {
  const errors = usernameverify({}, values);
  emailverify(errors, values);
  subjectverify(errors, values);
  departmentverify(errors, values);
  return errors;
}

function emailverify(error = {}, values) {
  if (!values.email) {
    error.email = toast.error("email required!");
  }

  return error;
}
function usernameverify(error = {}, values) {
  if (!values.name) {
    error.username = toast.error("Username required!");
  }

  return error;
}

function subjectverify(error = {}, values) {
  if (!values.subject) {
    error.username = toast.error("Subject required!");
  }

  return error;
}

function departmentverify(error = {}, values) {
  if (!values.department) {
    error.username = toast.error("Department required!");
  }

  return error;
}
