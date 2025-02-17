package com.sksamuel.kotest.engine.test.status

import io.kotest.core.descriptors.append
import io.kotest.core.descriptors.toDescriptor
import io.kotest.core.internal.KotestEngineProperties
import io.kotest.core.names.TestName
import io.kotest.core.source.sourceRef
import io.kotest.core.spec.style.FunSpec
import io.kotest.core.test.Enabled
import io.kotest.core.test.TestCase
import io.kotest.core.test.TestType
import io.kotest.engine.test.status.SystemPropertyTestFilterEnabledExtension
import io.kotest.extensions.system.withSystemProperty
import io.kotest.matchers.shouldBe

class SystemPropertyTestFilterEnabledExtensionTest : FunSpec() {
   init {

      test("should include tests when no filter sysprop or env is specified") {

         val tc = TestCase(
            SystemPropertyTestFilterEnabledExtensionTest::class.toDescriptor().append("foo"),
            TestName("foo"),
            SystemPropertyTestFilterEnabledExtensionTest(),
            {},
            sourceRef(),
            TestType.Test
         )

         SystemPropertyTestFilterEnabledExtension.isEnabled(tc).shouldBe(Enabled.enabled)
      }

      test("should include tests that match regex") {

         val tc = TestCase(
            SystemPropertyTestFilterEnabledExtensionTest::class.toDescriptor().append("foo"),
            TestName("foo"),
            SystemPropertyTestFilterEnabledExtensionTest(),
            {},
            sourceRef(),
            TestType.Test
         )

         withSystemProperty(KotestEngineProperties.filterTests, "foo") {
            SystemPropertyTestFilterEnabledExtension.isEnabled(tc).shouldBe(Enabled.enabled)
         }

         withSystemProperty(KotestEngineProperties.filterTests, "f*") {
            SystemPropertyTestFilterEnabledExtension.isEnabled(tc).shouldBe(Enabled.enabled)
         }

         withSystemProperty(KotestEngineProperties.filterTests, "*o") {
            SystemPropertyTestFilterEnabledExtension.isEnabled(tc).shouldBe(Enabled.enabled)
         }
      }

      test("should exclude tests that do not match regex") {

         val tc = TestCase(
            SystemPropertyTestFilterEnabledExtensionTest::class.toDescriptor().append("foo"),
            TestName("foo"),
            SystemPropertyTestFilterEnabledExtensionTest(),
            {},
            sourceRef(),
            TestType.Test
         )

         withSystemProperty(KotestEngineProperties.filterTests, "goo") {
            SystemPropertyTestFilterEnabledExtension.isEnabled(tc)
               .shouldBe(Enabled.disabled("Excluded by --kotest.filter.tests: goo"))
         }

         withSystemProperty(KotestEngineProperties.filterTests, "g*") {
            SystemPropertyTestFilterEnabledExtension.isEnabled(tc)
               .shouldBe(Enabled.disabled("Excluded by --kotest.filter.tests: g.*?"))
         }

         withSystemProperty(KotestEngineProperties.filterTests, "*p") {
            SystemPropertyTestFilterEnabledExtension.isEnabled(tc)
               .shouldBe(Enabled.disabled("Excluded by --kotest.filter.tests: .*?p"))
         }
      }
   }
}
