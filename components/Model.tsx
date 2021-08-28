import '@google/model-viewer';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'model-viewer': {
                'src': string,
                'shadow-intensity': string,
                'poster': string,
                'alt': string,
            };
        }
    }
}

const Model = () => (
    <div className="hidden md:block">
        <model-viewer
            src="/Earth.glb"
            poster="/poster.jpg"
            alt="A 3D model of a globe"
            shadow-intensity="1"
            auto-rotate
        ></model-viewer>
    </div>

)

export default Model;
