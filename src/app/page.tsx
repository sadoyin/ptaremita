import { getServerSession } from "@/lib/get-session";
import Image from "next/image";
import { unauthorized } from "next/navigation";

export default async function Home() {
    const session = await getServerSession()
    const user  = session?.user


    if(!user) unauthorized()

  return (
    <div className="">
       <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row">
            {/* Profile section  */}
            <div className="w-full md:w-1/3 bg-white shadow-md p-4 mb-4 md:mb-0 md:mr-4">
                <div className="bg-purple-500 text-white p-4 rounded-t-lg">
                    <h2 className="text-xl font-bold">Welcome to Izehiuwa&apos;s Profile!</h2>
                </div>
                <div className="p-4 text-center">
                    <Image src="/placeholder.png" alt="Profile Picture" width={100} height={100} className="w-24 h-24 rounded-full mx-auto"/>
                    <p className="mt-2">Ifidon-Ojeomu Izehiuwa Denise</p>
                    <p className="text-sm text-gray-500">QCLAG2371753 | Student</p>
                    <div className="mt-4">
                        <span className="bg-blue-500 text-white px-2 py-1 rounded">JS2T</span>
                        <span className="bg-gray-300 text-gray-700 px-2 py-1 rounded ml-2">Boarder</span>
                    </div>
                </div>
            </div>

            {/* Bill section */}
            <div className="w-full md:w-2/3 bg-white shadow-md p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Current Bill Invoice</h2>
                    <div className="flex space-x-2">
                        <a href="#" className="text-blue-500">Payment History</a>
                        <a href="#" className="text-blue-500">Change Password</a>
                    </div>
                </div>
                <div className="bg-purple-500 text-white p-2 rounded mb-4">
                    <h3 className="text-sm">Current Bills - JSS2 Second Term 2024/2025</h3>
                </div>
                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-2 text-left">FEE ITEMS</th>
                            <th className="p-2 text-right">AMOUNT (₦)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-2">KARATE (SELF-DEFENSE)</td>
                            <td className="p-2 text-right">5,000</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="p-2">TRAINING - OPTIONAL</td>
                            <td className="p-2 text-right">1,000</td>
                        </tr>
                        <tr>
                            <td className="p-2">RELIGION DUE (CATHOLICS)</td>
                            <td className="p-2 text-right">1,000</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="p-2">RELIGION DUE (MUSLIM)</td>
                            <td className="p-2 text-right">1,000</td>
                        </tr>
                        <tr>
                            <td className="p-2">RELIGION DUE (PROTESTANTS)</td>
                            <td className="p-2 text-right">1,000</td>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Payment Options</h3>
                    <p className="text-sm">Bank Branch, Internet Banking, USSD, Debit Card</p>
                    <div className="flex mt-2">
                        <Image src="/remitapaymentlogo.png" alt="Visa" width={100} height={100} className="h-6 mr-2"/>
                        {/* <Image src="mastercard.png" alt="MasterCard" width={100} height={100} className="h-6 mr-2"/>
                        <Image src="verve.png" alt="Verve" width={100} height={100} className="h-6 mr-2"/> */}
                    </div>
                    <div className="mt-4 text-right">
                        <p className="text-lg font-bold">Amount to Pay: ₦0.00</p>
                        <button className="bg-purple-500 text-white px-4 py-2 rounded mt-2">GENERATE RRR</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

          </div>
  );
}
