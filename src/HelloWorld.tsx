import {OffthreadVideo, staticFile, AbsoluteFill} from 'remotion';

export const HelloWorld: React.FC = () => {
	return (
	<AbsoluteFill>
		<OffthreadVideo src={staticFile('iphone-video.mov')} style={{ width: '100%', height: '100%' }} />
	</AbsoluteFill>);
};
