# jQuery-bengaliDigitToEnglishDigitConverter
jQuery plugin for Bengali digit to English digit converter 


<h1>jQuery Face Detection Plugin</h1>

<p><a href="https://travis-ci.org/jaysalvat/https://travis-ci.org/jaysalvat/jquery.facedetection" rel="nofollow"><img alt="Build Status" src="https://camo.githubusercontent.com/f9ceb6ef378bbebcb3843e76785aee0968f171c3/68747470733a2f2f7472617669732d63692e6f72672f6a617973616c7661742f6a71756572792e66616365646574656374696f6e2e706e673f6272616e63683d6d6173746572" /></a>&nbsp;<a href="http://badge.fury.io/js/jquery.facedetection" rel="nofollow"><img alt="NPM version" src="https://camo.githubusercontent.com/424eec3a30162837df4db0e84892cef3ca901d65/68747470733a2f2f62616467652e667572792e696f2f6a732f6a71756572792e66616365646574656374696f6e2e737667" /></a>&nbsp;<a href="http://badge.fury.io/bo/jquery.facedetection" rel="nofollow"><img alt="Bower version" src="https://camo.githubusercontent.com/1b1cd013a471f8882648e35c3baf801cd040db6e/68747470733a2f2f62616467652e667572792e696f2f626f2f6a71756572792e66616365646574656374696f6e2e737667" /></a></p>

<p>A jQuery/Zepto plugin to detect faces on images, videos and canvases to get theirs coordinates.</p>

<p><strong>Importante note:</strong>&nbsp;This plugin uses an algorithm by&nbsp;<a href="http://liuliu.me/" rel="nofollow">Liu Liu</a>.</p>

<h2>Demos</h2>

<p>Website and demo here:</p>

<p><a href="http://facedetection.jaysalvat.com/" rel="nofollow">http://facedetection.jaysalvat.com/</a></p>

<h2>Get started</h2>

<p>Download the plugin with the method of your choice.</p>

<ul>
	<li>
	<p>Download the&nbsp;<a href="http://jaysalvat.github.io/jquery.facedetection/releases/latest/jquery.facedetection.zip" rel="nofollow">last release</a>&nbsp;manually</p>
	</li>
	<li>
	<p>Or install it with&nbsp;<a href="http://bower.io/" rel="nofollow">Bower</a>.</p>

	<pre>
<code>  bower install jquery.facedetection
</code></pre>
	</li>
	<li>
	<p>Or install it with&nbsp;<a href="https://www.npmjs.org/package/jquery.facedetection" rel="nofollow">NPM</a>.</p>

	<pre>
<code>  npm install jquery.facedetection
</code></pre>
	</li>
</ul>

<p>Include&nbsp;<a href="https://code.jquery.com/jquery-3.2.1.min.js" rel="nofollow">jQuery</a>&nbsp;and the plugin.</p>

<pre>
<code>&lt;script src=&quot;https://code.jquery.com/jquery-3.2.1.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;path/to/dist/jquery.facedetection.min.js&quot;&gt;&lt;/script&gt;
</code></pre>

<p>Set a picture with some faces in your HTML page.</p>

<pre>
<code>&lt;img id=&quot;picture&quot; src=&quot;img/face.jpg&quot;&gt;
</code></pre>

<p>Apply the plugin to this image and get the face coordinates.</p>

<pre>
<code>&lt;script&gt;
    $(&#39;#picture&#39;).faceDetection({
        complete: function (faces) {
            console.log(faces);
        }
    });
&lt;/script&gt;
</code></pre>

<h2>Results</h2>

<p>Returns an array of found faces object:</p>

<ul>
	<li><strong>x</strong>&nbsp;&mdash; X coord of the face in the picture</li>
	<li><strong>y</strong>&nbsp;&mdash; Y coord of the face in the picture</li>
	<li><strong>width</strong>&nbsp;&mdash; Width of the face</li>
	<li><strong>height</strong>&nbsp;&mdash; Height of the face</li>
	<li><strong>positionX</strong>&nbsp;&mdash; X position relative to the document</li>
	<li><strong>positionY</strong>&nbsp;&mdash; Y position relative to the document</li>
	<li><strong>offsetX</strong>&nbsp;&mdash; X position relative to the offset parent</li>
	<li><strong>offsetY</strong>&nbsp;&mdash; Y position relative to the offset parent</li>
	<li><strong>scaleX</strong>&nbsp;&mdash; Ratio between original image width and displayed width</li>
	<li><strong>scaleY</strong>&nbsp;&mdash; Ratio between original image height and displayed height</li>
	<li><strong>confidence</strong>&nbsp;&mdash; Level of confidence</li>
</ul>

<h2>Settings</h2>

<ul>
	<li>
	<p><strong>interval</strong>&nbsp;&mdash; Interval (default 4)</p>
	</li>
	<li>
	<p><strong>minNeighbors</strong>&nbsp;&mdash; Minimum neighbors threshold which sets the cutoff level for discarding rectangle groups as face (default 1)</p>
	</li>
	<li>
	<p><strong>confidence</strong>&nbsp;&mdash; Minimum confidence (default null)</p>
	</li>
	<li>
	<p><strong>async</strong>&nbsp;&mdash; Async mode if Worker available (default false). The async mode uses Workers and needs the script to be on the same domain.</p>
	</li>
	<li>
	<p><strong>grayscale</strong>&nbsp;&mdash; Convert to grayscale before processing (default true)</p>
	</li>
	<li>
	<p><strong>complete</strong>&nbsp;&mdash; Callback function trigged after the detection is completed</p>

	<pre>
<code>  complete: function (faces) {
      // ...
  }
</code></pre>
	</li>
	<li>
	<p><strong>error</strong>&nbsp;&mdash; Callback function trigged on errors</p>

	<pre>
<code>  error: function (code, message) {
      // ...
  }</code></pre>
	</li>
</ul>



