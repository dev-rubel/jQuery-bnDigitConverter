
<h1>jQuery Bengali Digit to English Digit Converter</h1>



<p>A jQuery plugin to real time convert Bengali digit to English digit</p>

<h2>Demos</h2>

<p>Website and demo here:</p>

<p><a href="http://tanvirpro.com/" target="_blank">http://tanvirpro.com/all_project/bengaliDigitConverter</a></p>

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

<p>To change any Bengali digit on your HTML page.</p>

<p>Write an input field or any HTML&nbsp;element</p>

<pre>
<code>&lt;span&gt;১২৩৪৫৬৭৮৯&lt;/span&gt;
&lt;input type=&quot;text&quot; value=&quot;১৯৭১&quot;&gt; 
</code></pre>

<p>Apply the plugin to input or any element on your HTML page and get replace Bengali digit to English digit.</p>

<pre>
<code>&lt;script&gt;
    $(selector).</code>convertBengaliDigit<code>();
&lt;/script&gt;
</code></pre>

<h2>Results</h2>

<p>Returns Bengali digit in English</p>
<pre><code>  

	১৯৭১ -> 1971
	
	২০১৮ -> 2018
	
	০১২৩৪৫৬৭৮৯ -> 0123456789
</code></pre>
<h2>Settings</h2>

<ul>
<li>
	<p><strong>complete</strong>&nbsp;&mdash; Callback function trigged after the detection is completed</p>
<pre><code>  	
complete: function () {
	// ...
}
</code></pre>

</li>
</ul>




