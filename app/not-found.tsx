import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return <div className="text-4xl">Not found!</div>;
}
