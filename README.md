
<h1>jQuery Bengali Digit to English Digit Converter</h1>

<p><a href="https://travis-ci.org/jaysalvat/https://travis-ci.org/jaysalvat/jquery.facedetection" rel="nofollow"><img alt="Build Status" src="https://camo.githubusercontent.com/f9ceb6ef378bbebcb3843e76785aee0968f171c3/68747470733a2f2f7472617669732d63692e6f72672f6a617973616c7661742f6a71756572792e66616365646574656374696f6e2e706e673f6272616e63683d6d6173746572" /></a>&nbsp;</p>

<p>A jQuery plugin to convert Bengali digit to English digit</p>

<h2>Demos</h2>

<p>Website and demo here:</p>

<p><a href="http://tanvirpro.com/" rel="nofollow">http://tanvirpro.com/all_project/bengaliDigitConverter</a></p>

<h2>Get started</h2>

<ul>
	<li>
	<p>Download the&nbsp;<a href="https://github.com/tanvirs2/jQuery-bnDigitConverter/archive/master.zip" rel="nofollow">last release</a>&nbsp;manually</p>
	</li>
</ul>

<p>Include&nbsp;<a href="https://code.jquery.com/jquery-3.2.1.min.js" rel="nofollow">jQuery</a>&nbsp;and the plugin.</p>

<pre>
<code>&lt;script src=&quot;https://code.jquery.com/jquery-3.2.1.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;js/</code>jquery.bengaliDigitConverter.js<code>&quot;&gt;&lt;/script&gt;
</code></pre>

<p>Set a picture with some faces in your HTML page.</p>

<p>write an input field or any HTML&nbsp;element</p>

<pre>
<code>&lt;span&gt;১২৩৪৫৬৭৮৯&lt;/span&gt;
&lt;input type=&quot;text&quot; value=&quot;১৯৭১&quot;&gt; 
</code></pre>

<p>Apply the plugin to this input&nbsp;or any element and get English&nbsp;digit.</p>

<pre>
<code>&lt;script&gt;
    $(selector).</code>convertBengaliDigit<code>();
&lt;/script&gt;
</code></pre>

<h2>Results</h2>

<p>Returns Bengali digit in English</p>
<code>  
	
	১৯৭১ -> 1971
	
	২০১৮ -> 2018
	
	০১২৩৪৫৬৭৮৯ -> 0123456789
</code>
<h2>Settings</h2>

<ul>
	<li>
	<p><strong>complete</strong>&nbsp;&mdash; Callback function trigged after the detection is completed</p>

	
<code>  
	
	complete: function () {
      		// ...
  	}
</code>

</li>
</ul>




