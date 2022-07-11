import { ToastContainer, toast } from "react-toastify";

const Home = () => {
	const connectWallet = async () => {
		if (window.ethereum === undefined) {
			toast.error("Metamask is not installed, please install metamask");
		} else {
			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			});
			toast.success("Metamask connected successfully");
			console.log(accounts[0]);
		}
	};

	return (
		<div>
			<button
				onClick={connectWallet}
				className="p-2 m-2 border border-gray-700 hover:bg-indigo-800 hover:text-white rounded-md"
			>
				Connect Wallet
			</button>
			<ToastContainer />
		</div>
	);
};
export default Home;
