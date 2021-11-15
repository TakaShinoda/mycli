import React, { FC } from "react";
import { Box, Text, Newline } from "ink";

const App: FC<{ name?: string }> = ({ name = "SHINODA Takahiro" }) => {
	return (
		<Box borderStyle="double" padding={1} borderColor="green" width={52}>
			<Text>
				Hello, I'm <Text color="green">{name}</Text>
				<Newline />
				<Text color="#1DA1F2">Twitter:</Text> https://twitter.com/tttttt_621_s
				<Newline />
				<Text color="#0e0c0d">GitHub:</Text> https://github.com/TakaShinoda
				<Newline />
				<Text color="#f39700">Blog:</Text> https://takashinoda.hatenablog.com/archive
				<Newline />
				<Text color="#D50101">npm:</Text> https://www.npmjs.com/~t.shinoda
			</Text>
		</Box>
	);
};

module.exports = App;
export default App;
