import React, { useState } from 'react';
import FoodIllustration from './FoodIllustration';
import { submitOwnershipForm } from '../lib/mailchimp';
import { supabase } from '../lib/supabase';

function OwnershipForm() {
  const [formData, setFormData] = useState({
    primaryFirstName: '',
    primaryLastName: '',
    primaryEmail: '',
    secondaryFirstName: '',
    secondaryLastName: '',
    secondaryEmail: '',
    emailUpdates: '',
    address: '',
    city: '',
    state: '',
    phone: '',
    paymentOption: '',
    understandPatronage: false,
    understandVoting: false,
    understandMembership: false
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    if (!formData.primaryFirstName) newErrors.primaryFirstName = 'Required';
    if (!formData.primaryLastName) newErrors.primaryLastName = 'Required';
    if (!formData.primaryEmail) newErrors.primaryEmail = 'Required';
    if (!formData.emailUpdates) newErrors.emailUpdates = 'Required';
    if (!formData.address) newErrors.address = 'Required';
    if (!formData.city) newErrors.city = 'Required';
    if (!formData.state) newErrors.state = 'Required';
    if (!formData.phone) newErrors.phone = 'Required';
    if (!formData.paymentOption) newErrors.paymentOption = 'Required';
    if (!formData.understandPatronage) newErrors.understandPatronage = 'Required';
    if (!formData.understandVoting) newErrors.understandVoting = 'Required';
    if (!formData.understandMembership) newErrors.understandMembership = 'Required';

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.primaryEmail && !emailRegex.test(formData.primaryEmail)) {
      newErrors.primaryEmail = 'Invalid email format';
    }
    if (formData.secondaryEmail && !emailRegex.test(formData.secondaryEmail)) {
      newErrors.secondaryEmail = 'Invalid email format';
    }

    // Phone format validation
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Invalid phone format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (!validateForm()) {
        return;
      }

      // Submit form data to Supabase
      const { error } = await supabase
        .from('ownership_submissions')
        .insert([{
          primary_first_name: formData.primaryFirstName,
          primary_last_name: formData.primaryLastName,
          primary_email: formData.primaryEmail,
          secondary_first_name: formData.secondaryFirstName || null,
          secondary_last_name: formData.secondaryLastName || null,
          secondary_email: formData.secondaryEmail || null,
          email_updates: formData.emailUpdates,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          phone: formData.phone,
          payment_option: formData.paymentOption
        }]);

      if (error) throw error;

      // Submit to Mailchimp and send notification
      const { success, error: mailchimpError } = await submitOwnershipForm(formData);
      
      if (!success) {
        throw new Error(mailchimpError);
      }

      // Redirect to appropriate Square checkout based on payment option
      if (formData.paymentOption === 'sponsor') {
        window.location.href = 'https://square.link/u/jeTA5TIL';
      } else if (formData.paymentOption === 'full') {
        window.location.href = 'https://checkout.square.site/merchant/MLB6RB40T95A0/checkout/NY3SK7VLL3ZFV77HDP46RBLD';
      } else if (formData.paymentOption === 'installment') {
        window.location.href = 'https://checkout.square.site/merchant/MLB6RB40T95A0/checkout/DUAGELD2KIDPKXBKRQYHLC4R';
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      // Handle error (you might want to show an error message to the user)
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section id="ownershipForm" className="relative px-[5%] py-16 md:py-24 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#F7F3E9] opacity-50">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(135, 158, 60, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(208, 97, 41, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(230, 179, 116, 0.1) 0%, transparent 50%)
          `
        }}></div>
      </div>

      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-3 via-accent-1 to-accent-2 bg-clip-text text-transparent">
              Ownership Form
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Join our community of member-owners and help shape the future of food access in West Boulevard.
            </p>
            
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 opacity-10">
              <FoodIllustration type="sunflower" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 opacity-10">
              <FoodIllustration type="leaf" />
            </div>

            <form onSubmit={handleSubmit} className="relative bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl border-t-4 border-accent-3">
              {/* Primary Member-Owner */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Primary Member-Owner</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="primaryFirstName">
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="primaryFirstName"
                      name="primaryFirstName"
                      value={formData.primaryFirstName}
                      onChange={handleChange}
                      className={`w-full border ${errors.primaryFirstName ? 'border-red-500' : 'border-border-primary'} rounded-lg p-3 bg-white`}
                    />
                    {errors.primaryFirstName && <p className="text-red-500 text-sm mt-1">{errors.primaryFirstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="primaryLastName">
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="primaryLastName"
                      name="primaryLastName"
                      value={formData.primaryLastName}
                      onChange={handleChange}
                      className={`w-full border ${errors.primaryLastName ? 'border-red-500' : 'border-border-primary'} rounded-lg p-3 bg-white`}
                    />
                    {errors.primaryLastName && <p className="text-red-500 text-sm mt-1">{errors.primaryLastName}</p>}
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="primaryEmail">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="primaryEmail"
                    name="primaryEmail"
                    value={formData.primaryEmail}
                    onChange={handleChange}
                    className={`w-full border ${errors.primaryEmail ? 'border-red-500' : 'border-border-primary'} rounded-lg p-3 bg-white`}
                  />
                  {errors.primaryEmail && <p className="text-red-500 text-sm mt-1">{errors.primaryEmail}</p>}
                </div>
              </div>

              {/* Secondary Member-Owner */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Secondary Member-Owner</h3>
                <p className="text-sm text-gray-600 mb-4">
                  You can name a secondary member-owner in your household whom you share your membership benefits with, yet they are unable to vote. They must be over the age of 17.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="secondaryFirstName">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="secondaryFirstName"
                      name="secondaryFirstName"
                      value={formData.secondaryFirstName}
                      onChange={handleChange}
                      className="w-full border border-border-primary rounded-lg p-3 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="secondaryLastName">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="secondaryLastName"
                      name="secondaryLastName"
                      value={formData.secondaryLastName}
                      onChange={handleChange}
                      className="w-full border border-border-primary rounded-lg p-3 bg-white"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="secondaryEmail">
                    Email
                  </label>
                  <input
                    type="email"
                    id="secondaryEmail"
                    name="secondaryEmail"
                    value={formData.secondaryEmail}
                    onChange={handleChange}
                    className={`w-full border ${errors.secondaryEmail ? 'border-red-500' : 'border-border-primary'} rounded-lg p-3 bg-white`}
                  />
                  {errors.secondaryEmail && <p className="text-red-500 text-sm mt-1">{errors.secondaryEmail}</p>}
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2" htmlFor="address">
                      Address*
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={`w-full border ${errors.address ? 'border-red-500' : 'border-border-primary'} rounded-lg p-3 bg-white`}
                    />
                    {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="city">
                      City*
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={`w-full border ${errors.city ? 'border-red-500' : 'border-border-primary'} rounded-lg p-3 bg-white`}
                    />
                    {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="state">
                      State*
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={`w-full border ${errors.state ? 'border-red-500' : 'border-border-primary'} rounded-lg p-3 bg-white`}
                    />
                    {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-2" htmlFor="phone">
                    Phone*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full border ${errors.phone ? 'border-red-500' : 'border-border-primary'} rounded-lg p-3 bg-white`}
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Email Updates */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Communication Preferences</h3>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    May we email you updates about the co-op?*
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="emailUpdates"
                        value="yes"
                        checked={formData.emailUpdates === 'yes'}
                        onChange={handleChange}
                        className="text-accent-3 focus:ring-accent-3"
                      />
                      Yes
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="emailUpdates"
                        value="no"
                        checked={formData.emailUpdates === 'no'}
                        onChange={handleChange}
                        className="text-accent-3 focus:ring-accent-3"
                      />
                      No
                    </label>
                  </div>
                  {errors.emailUpdates && <p className="text-red-500 text-sm mt-1">{errors.emailUpdates}</p>}
                </div>
              </div>

              {/* Payment Options */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Payment Option*</h3>
                <div className="space-y-4">
                  <label className="block p-6 border border-border-primary rounded-lg hover:bg-accent-3/10 cursor-pointer">
                    <div className="flex items-start gap-4">
                      <input
                        type="radio"
                        name="paymentOption"
                        value="full"
                        checked={formData.paymentOption === 'full'}
                        onChange={handleChange}
                        className="mt-1 text-accent-3 focus:ring-accent-3"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <img
                            src="https://static.wixstatic.com/media/c73eb8_ef16fc06fef44694b1b27b0a6dddfa60~mv2.png"
                            alt="Full payment option"
                            className="w-16 h-16 object-contain"
                          />
                          <span className="font-bold">Member-Owner full pay</span>
                        </div>
                        <p>I will pay my equity share investment of $100 today.</p>
                      </div>
                    </div>
                  </label>
                  <label className="block p-6 border border-border-primary rounded-lg hover:bg-accent-3/10 cursor-pointer">
                    <div className="flex items-start gap-4">
                      <input
                        type="radio"
                        name="paymentOption"
                        value="installment"
                        checked={formData.paymentOption === 'installment'}
                        onChange={handleChange}
                        className="mt-1 text-accent-3 focus:ring-accent-3"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <img
                            src="https://static.wixstatic.com/media/c73eb8_bd543d3303d74e189df6b8fc7cfe92bb~mv2.png"
                            alt="Installment payment option"
                            className="w-16 h-16 object-contain"
                          />
                          <span className="font-bold">Member-Owner installment pay</span>
                        </div>
                        <p>I will pay the first $27.50 today of 4 monthly payments and the next 3 payments within 90 days. This includes a $2.50 convenience fee for each payment.</p>
                      </div>
                    </div>
                  </label>
                  <label className="block p-6 border border-border-primary rounded-lg hover:bg-accent-3/10 cursor-pointer">
                    <div className="flex items-start gap-4">
                      <input
                        type="radio"
                        name="paymentOption"
                        value="sponsor"
                        checked={formData.paymentOption === 'sponsor'}
                        onChange={handleChange}
                        className="mt-1 text-accent-3 focus:ring-accent-3"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <img
                            src="https://static.wixstatic.com/media/c73eb8_22ccdea609ea456494a5d129de996b65~mv2.png"
                            alt="Sponsor payment option"
                            className="w-16 h-16 object-contain"
                          />
                          <span className="font-bold">Sponsor a Membership</span>
                        </div>
                        <p>I will sponsor a membership for someone else by paying the full $100 equity share investment today.</p>
                      </div>
                    </div>
                  </label>
                  {errors.paymentOption && <p className="text-red-500 text-sm mt-1">{errors.paymentOption}</p>}
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Please read the statements below*</h3>
                <div className="space-y-4">
                  <label className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      name="understandPatronage"
                      checked={formData.understandPatronage}
                      onChange={handleChange}
                      className="mt-1 text-accent-3 focus:ring-accent-3"
                    />
                    <span>I understand that Patronage Rebates, voting privileges, and the ability to request changes to my account are tied to the Primary Member-Owner only.</span>
                  </label>
                  {errors.understandPatronage && <p className="text-red-500 text-sm">{errors.understandPatronage}</p>}

                  <label className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      name="understandVoting"
                      checked={formData.understandVoting}
                      onChange={handleChange}
                      className="mt-1 text-accent-3 focus:ring-accent-3"
                    />
                    <span>I understand that voting privileges are only available to the Primary Member-Owner when their equity has been paid in full.</span>
                  </label>
                  {errors.understandVoting && <p className="text-red-500 text-sm">{errors.understandVoting}</p>}

                  <label className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      name="understandMembership"
                      checked={formData.understandMembership}
                      onChange={handleChange}
                      className="mt-1 text-accent-3 focus:ring-accent-3"
                    />
                    <span>I understand that Member-Owners are responsible for maintaining an active membership in good standing*.</span>
                  </label>
                  {errors.understandMembership && <p className="text-red-500 text-sm">{errors.understandMembership}</p>}
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  *An active membership in good standing, requires:
                  <br />• contact information is updated annually; and
                  <br />• equity payments are paid in full.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-background-alternative text-white py-4 px-6 rounded-lg hover:bg-accent-3 transition-colors text-lg font-semibold"
              >
                Submit & Pay
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OwnershipForm;