import { useState } from "react";
import { validateForm } from "../../utils/validation";
import { toast } from "sonner";
import FieldInput from "../../components/UI/fieldInput/FieldInput";
import FieldTextArea from "../../components/UI/fieldTextarea/FieldTextArea";
import Button from "../../components/UI/button/Button";
import { Mail, Lock } from "lucide-react";


const ContactPage = () => {
    const [form, setForm] = useState({ fullname: "", email: "", password: "" });
    const handleSubmit = () => {
        const errors = validateForm(form);
        if (Object.keys(errors).length > 0) {
            toast.error("Validation failed");
        } else {
            toast.success("Form submitted");
        }
    };
    return (
        <div className="contactPage">
            <div className="container mx-auto">
                <div className="max-w-md mx-auto space-y-4">
                    <form action="" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                        <FieldInput
                            label="Email"
                            placeholder="Enter email"
                            iconLeft={<Mail size={16} />}
                            maxLength={50}
                        />

                        <FieldInput
                            label="Password"
                            type="password"
                            iconRight={<Lock size={16} />}
                            maxLength={20}
                        />

                        <FieldTextArea
                            label="Message"
                            placeholder="Enter message"
                            maxLength={200}
                        />

                        <Button>
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
