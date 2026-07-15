import { MapPin } from "lucide-react";
import Card from "../../../components/common/Card.jsx";
import Copyright from "../../../components/layout/Copyright.jsx";
import Navbar from "../../../components/layout/Navbar.jsx";
import InputField from "../../../components/common/InputField.jsx";
import { Link } from "react-router-dom";
import Button from "../../../components/common/Button.jsx";
import SelectField from "../../../components/common/SelectField.jsx";

export default function FormAddress() {
  return (
    <>
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
          <div className="flex gap-8">
            {/* Right Content Area */}
            <div className="flex-grow space-y-8">
              <div className="flex flex-col gap-1 mb-2">
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                  Add New Address
                </h1>
                <p className="text-slate-500 font-medium">
                  Please enter your complete address details to ensure fast and
                  accurate delivery.
                </p>
              </div>

              <Card>
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded-xl text-blue-500">
                      <MapPin size={20} />
                    </div>
                    <h2 className="font-bold text-lg text-slate-900">
                      Address
                    </h2>
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Grid Input Fields */}
                  {/* 1. LABEL ALAMAT */}
                  {/* Address Label */}
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      ADDRESS LABEL
                    </label>
                    <InputField
                      id="label"
                      placeholder="e.g., Home, Office, Apartment"
                      isRequired={true}
                    />
                  </div>

                  {/* Province */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      PROVINCE
                    </label>
                    <SelectField id="province" isRequired={true}>
                      <option value="">Select Province</option>
                      {/* Loop Indonesian API Provinces here */}
                    </SelectField>
                  </div>

                  {/* City / Regency */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      CITY / REGENCY
                    </label>
                    <SelectField id="city" isRequired={true}>
                      <option value="">Select City/Regency</option>
                    </SelectField>
                  </div>

                  {/* District */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      DISTRICT
                    </label>
                    <SelectField id="subdistrict" isRequired={true}>
                      <option value="">Select District</option>
                    </SelectField>
                  </div>

                  {/* Sub-District / Village */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      SUB-DISTRICT / VILLAGE
                    </label>
                    <SelectField id="urban_village" isRequired={true}>
                      <option value="">Select Sub-District/Village</option>
                    </SelectField>
                  </div>

                  {/* Postal Code */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      POSTAL CODE
                    </label>
                    <InputField
                      id="postal_code"
                      placeholder="e.g., 11170"
                      isRequired={true}
                    />
                  </div>

                  {/* Neighborhood Unit (RT / RW) */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      RT / RW (NEIGHBORHOOD UNITS)
                    </label>
                    <InputField
                      id="rt_rw"
                      placeholder="e.g., RT 005 / RW 002"
                      isRequired={true}
                    />
                  </div>

                  {/* Street Address */}
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      STREET NAME & HOUSE NUMBER
                    </label>
                    <InputField
                      id="street"
                      placeholder="e.g., Jl. Mangga Besar No. 12"
                      isRequired={true}
                    />
                  </div>

                  {/* Additional Info */}
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      ADDITIONAL DETAILS / LANDMARK (OPTIONAL)
                    </label>
                    <InputField
                      id="additional_info"
                      placeholder="e.g., Black gate, next to the convenience store"
                    />
                  </div>

                  {/* Button Actions Group */}
                  <div className="flex items-center justify-end gap-4 border-t border-slate-100 pt-6">
                    {/* Tombol Kembali (Abu-abu / Secondary) */}
                    <Link to={"/profile"}>
                      <Button variant="secondary" size="md">
                        Kembali
                      </Button>
                    </Link>
                    {/* Tombol Change Password (Hijau / Success) */}
                    {/* Jika ingin warna merah, tinggal ganti variant="danger" */}
                    <Button variant="success" size="md" type="submit">
                      Add Address
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
      <Copyright />
    </>
  );
}
