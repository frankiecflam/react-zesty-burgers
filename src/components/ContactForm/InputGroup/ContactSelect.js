import "./ContactSelect.css";

const ContactSelect = ({ onChange }) => {
  return (
    <select
      id="recommend"
      defaultValue={"default"}
      className="contact__select"
      onChange={onChange}
    >
      <option value="default" disabled>
        Please select
      </option>
      <option value="10">10 (Most likely)</option>
      <option value="9">9 </option>
      <option value="8">8 </option>
      <option value="7">7 </option>
      <option value="6">6 </option>
      <option value="5">5 </option>
      <option value="4">4 </option>
      <option value="3">3 </option>
      <option value="2">2 </option>
      <option value="1">1 (Least likely)</option>
    </select>
  );
};

export default ContactSelect;
