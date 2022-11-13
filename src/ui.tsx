import React, { FC } from "react";
import { Box, Text, Newline } from "ink";

const App: FC<{ guest?: string }> = ({ guest = "" }) => {
	return (
		<Box borderStyle="double" padding={1} borderColor="green" width={52}>
			<Text>
				Hello, <Text color="green">{guest}</Text>
				<Newline />
				I'm <Text color="green">Takahiro SHINODA</Text>
				<Newline />
				<Text color="#1DA1F2">Twitter:</Text> https://twitter.com/tttttt_621_s
				<Newline />
				<Text color="#0e0c0d">GitHub:</Text> https://github.com/TakaShinoda
				<Newline />
				<Text color="#bfdcff">zenn:</Text> https://zenn.dev/taka_shino
				<Newline />
				<Text color="#f39700">Blog:</Text>{" "}
				https://takashinoda.hatenablog.com/archive
				<Newline />
				<Text color="#D50101">npm:</Text> https://www.npmjs.com/~t.shinoda
			</Text>
		</Box>
	);
};

module.exports = App;
export default App;
