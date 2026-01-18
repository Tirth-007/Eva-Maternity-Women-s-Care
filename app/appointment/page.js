import AppointmentClient from "./AppointmentClient";
export const metadata = {
  title: "Schedule a Consultation | Eva Maternity Care",
  description:
    "Request a gynecology or pregnancy consultation at Eva Maternity Care. Contact via WhatsApp or submit an appointment request.",
};

export const dynamic = "force-static";

export default function AppointmentPage() {
  return <AppointmentClient />;
}
